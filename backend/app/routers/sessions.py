from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from datetime import datetime, timezone
from app.database import get_db
from app.models import GameSession, Problem, UserShortcutStat, User
from app.schemas import GameSessionCreate, GameSessionResponse

router = APIRouter(tags=["sessions"])


@router.post("/sessions", response_model=GameSessionResponse, status_code=201)
async def create_session(data: GameSessionCreate, db: AsyncSession = Depends(get_db)):
    # Verify user exists
    user = await db.get(User, data.user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Lookup problem by key
    result = await db.execute(select(Problem).where(Problem.problem_key == data.problem_key))
    problem = result.scalar_one_or_none()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")

    # Create game session
    session = GameSession(
        user_id=data.user_id,
        problem_id=problem.id,
        total_time_ms=data.total_time_ms,
        total_misses=data.total_misses,
        completed=data.completed,
        key_logs=[log.model_dump() for log in data.key_logs],
    )
    db.add(session)
    await db.flush()

    # Update user shortcut stats
    await _update_shortcut_stats(db, data)

    await db.refresh(session)
    return session


async def _update_shortcut_stats(db: AsyncSession, data: GameSessionCreate) -> None:
    """Aggregate key_logs into per-shortcut running averages."""
    # Group key logs by shortcut key
    agg: dict[str, dict] = {}
    for log in data.key_logs:
        key = log.key
        if key not in agg:
            agg[key] = {"total_latency": 0.0, "count": 0, "misses": 0}
        agg[key]["total_latency"] += log.latency_ms
        agg[key]["count"] += 1
        if log.is_miss:
            agg[key]["misses"] += 1

    for shortcut_key, stats in agg.items():
        # Only track ctrl_* shortcuts
        if not shortcut_key.startswith("ctrl_"):
            continue

        result = await db.execute(
            select(UserShortcutStat).where(
                UserShortcutStat.user_id == data.user_id,
                UserShortcutStat.shortcut_key == shortcut_key,
            )
        )
        existing = result.scalar_one_or_none()

        new_avg = stats["total_latency"] / stats["count"] if stats["count"] > 0 else 0

        if existing:
            # Running average
            total_attempts = existing.total_attempts + stats["count"]
            avg_latency = (
                existing.avg_latency_ms * existing.total_attempts + stats["total_latency"]
            ) / total_attempts
            miss_count = existing.miss_count + stats["misses"]
            miss_rate = miss_count / total_attempts if total_attempts > 0 else 0
            mastery = max(0.0, min(1.0, (500 / max(avg_latency, 1)) * (1 - miss_rate)))

            existing.avg_latency_ms = avg_latency
            existing.total_attempts = total_attempts
            existing.miss_count = miss_count
            existing.mastery_score = mastery
            existing.updated_at = datetime.now(timezone.utc)
        else:
            miss_rate = stats["misses"] / stats["count"] if stats["count"] > 0 else 0
            mastery = max(0.0, min(1.0, (500 / max(new_avg, 1)) * (1 - miss_rate)))
            stat = UserShortcutStat(
                user_id=data.user_id,
                shortcut_key=shortcut_key,
                avg_latency_ms=new_avg,
                total_attempts=stats["count"],
                miss_count=stats["misses"],
                mastery_score=mastery,
            )
            db.add(stat)
