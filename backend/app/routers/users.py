from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.database import get_db
from app.models import User, UserShortcutStat
from app.schemas import UserCreate, UserResponse, UserStatsResponse, ShortcutStatResponse
import uuid

router = APIRouter(tags=["users"])

WEAKNESS_THRESHOLD = 0.6


@router.post("/users", response_model=UserResponse, status_code=201)
async def create_user(data: UserCreate, db: AsyncSession = Depends(get_db)):
    user = User(nickname=data.nickname, locale=data.locale)
    db.add(user)
    await db.flush()
    await db.refresh(user)
    return user


@router.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    user = await db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.get("/users/{user_id}/stats", response_model=UserStatsResponse)
async def get_user_stats(user_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    user = await db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    result = await db.execute(
        select(UserShortcutStat).where(UserShortcutStat.user_id == user_id)
    )
    stats = result.scalars().all()
    stat_responses = [ShortcutStatResponse.model_validate(s) for s in stats]

    weaknesses = [s for s in stat_responses if s.mastery_score < WEAKNESS_THRESHOLD]
    weaknesses.sort(key=lambda x: x.mastery_score)

    return UserStatsResponse(user_id=user_id, stats=stat_responses, weaknesses=weaknesses)


@router.get("/users/{user_id}/stats/weaknesses", response_model=list[ShortcutStatResponse])
async def get_user_weaknesses(user_id: uuid.UUID, db: AsyncSession = Depends(get_db)):
    user = await db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    result = await db.execute(
        select(UserShortcutStat)
        .where(UserShortcutStat.user_id == user_id, UserShortcutStat.mastery_score < WEAKNESS_THRESHOLD)
        .order_by(UserShortcutStat.mastery_score.asc())
    )
    stats = result.scalars().all()
    return [ShortcutStatResponse.model_validate(s) for s in stats]
