from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.database import get_db
from app.models import Problem
from app.schemas import ProblemResponse

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


@router.get("/problems/{problem_key}", response_model=ProblemResponse)
async def get_problem(problem_key: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Problem).where(Problem.problem_key == problem_key))
    problem = result.scalar_one_or_none()
    if not problem:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Problem not found")
    return problem
