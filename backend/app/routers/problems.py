from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.database import get_db
from app.models import Problem, UserShortcutStat
from app.schemas import ProblemResponse, NextProblemRequest

router = APIRouter(tags=["problems"])


@router.get("/problems", response_model=list[ProblemResponse])
async def list_problems(
    type: str | None = Query(None),
    difficulty: str | None = Query(None),
    db: AsyncSession = Depends(get_db),
):
    stmt = select(Problem)
    if type:
        stmt = stmt.where(Problem.type == type)
    if difficulty:
        stmt = stmt.where(Problem.difficulty == difficulty)
    result = await db.execute(stmt)
    return result.scalars().all()


@router.post("/problems/next", response_model=ProblemResponse)
async def get_next_adaptive_problem(
    data: NextProblemRequest,
    db: AsyncSession = Depends(get_db),
):
    """Return a problem that targets the user's weakest shortcuts.

    Algorithm:
    1. Fetch user's shortcut stats sorted by mastery_score (ascending).
    2. Pick the weakest shortcuts (lowest mastery or never attempted).
    3. Find problems whose required_keys overlap with those weak shortcuts.
    4. If no stats exist, return a random easy problem.
    """
    # Get all shortcuts the user has practiced
    result = await db.execute(
        select(UserShortcutStat)
        .where(UserShortcutStat.user_id == data.user_id)
        .order_by(UserShortcutStat.mastery_score.asc())
    )
    stats = result.scalars().all()

    # All known shortcuts
    all_shortcuts = [
        "ctrl_f", "ctrl_b", "ctrl_n", "ctrl_p",
        "ctrl_a", "ctrl_e", "ctrl_k", "ctrl_h", "ctrl_d",
    ]

    if not stats:
        # New user: return a random easy problem
        stmt = select(Problem).where(Problem.difficulty == "easy")
        if data.type:
            stmt = stmt.where(Problem.type == data.type)
        result = await db.execute(stmt.order_by(Problem.problem_key))
        problems = result.scalars().all()
        if problems:
            import random
            return random.choice(problems)
        # Fallback: any problem
        result = await db.execute(select(Problem).limit(1))
        return result.scalar_one()

    # Find weak shortcuts: ones with low mastery or never attempted
    practiced_keys = {s.shortcut_key for s in stats}
    never_attempted = [k for k in all_shortcuts if k not in practiced_keys]

    # Combine: never-attempted first, then lowest mastery
    weak_keys = never_attempted + [s.shortcut_key for s in stats[:3]]

    # Find problems that require at least one weak key
    stmt = select(Problem)
    if data.type:
        stmt = stmt.where(Problem.type == data.type)
    result = await db.execute(stmt)
    all_problems = result.scalars().all()

    # Score problems: more overlap with weak keys = higher priority
    scored = []
    for p in all_problems:
        req_keys = p.required_keys if isinstance(p.required_keys, list) else []
        overlap = len(set(req_keys) & set(weak_keys))
        if overlap > 0:
            scored.append((overlap, p))

    if scored:
        scored.sort(key=lambda x: -x[0])
        # Pick from the top candidates with some randomness
        import random
        top = scored[:3]
        return random.choice(top)[1]

    # Fallback if nothing matched
    import random
    return random.choice(all_problems)


@router.get("/problems/{problem_key}", response_model=ProblemResponse)
async def get_problem(problem_key: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Problem).where(Problem.problem_key == problem_key))
    problem = result.scalar_one_or_none()
    if not problem:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Problem not found")
    return problem
