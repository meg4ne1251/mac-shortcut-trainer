"""Tests for problem API endpoints."""
import pytest
from httpx import AsyncClient
from app.models import Problem
from tests.conftest import TestSession


async def _seed_problems():
    """Seed test problems."""
    async with TestSession() as session:
        session.add(Problem(
            problem_key="p1", type="code", difficulty="easy",
            initial_content="const x = 1", goal_content="const x = 1;",
            required_keys=["ctrl_e"], locale="en",
        ))
        session.add(Problem(
            problem_key="t1", type="text", difficulty="easy",
            initial_content="helllo world", goal_content="hello world",
            required_keys=["ctrl_f", "ctrl_d"], locale="en",
        ))
        session.add(Problem(
            problem_key="p2", type="code", difficulty="hard",
            initial_content="fn()", goal_content="fn();",
            required_keys=["ctrl_e", "ctrl_n", "ctrl_k"], locale="en",
        ))
        await session.commit()


@pytest.mark.asyncio
async def test_list_all_problems(client: AsyncClient):
    await _seed_problems()
    resp = await client.get("/api/problems")
    assert resp.status_code == 200
    assert len(resp.json()) == 3


@pytest.mark.asyncio
async def test_list_problems_by_type(client: AsyncClient):
    await _seed_problems()
    resp = await client.get("/api/problems?type=code")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data) == 2
    assert all(p["type"] == "code" for p in data)


@pytest.mark.asyncio
async def test_list_problems_by_difficulty(client: AsyncClient):
    await _seed_problems()
    resp = await client.get("/api/problems?difficulty=easy")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data) == 2
    assert all(p["difficulty"] == "easy" for p in data)


@pytest.mark.asyncio
async def test_get_problem_by_key(client: AsyncClient):
    await _seed_problems()
    resp = await client.get("/api/problems/p1")
    assert resp.status_code == 200
    assert resp.json()["problem_key"] == "p1"


@pytest.mark.asyncio
async def test_get_problem_not_found(client: AsyncClient):
    resp = await client.get("/api/problems/nonexistent")
    assert resp.status_code == 404


@pytest.mark.asyncio
async def test_adaptive_next_problem_new_user(client: AsyncClient):
    await _seed_problems()
    # Create user
    user_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = user_resp.json()["id"]

    # New user should get an easy problem
    resp = await client.post("/api/problems/next", json={"user_id": user_id})
    assert resp.status_code == 200
    data = resp.json()
    assert data["difficulty"] == "easy"


@pytest.mark.asyncio
async def test_adaptive_next_problem_filter_by_type(client: AsyncClient):
    await _seed_problems()
    user_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = user_resp.json()["id"]

    resp = await client.post("/api/problems/next", json={"user_id": user_id, "type": "text"})
    assert resp.status_code == 200
    assert resp.json()["type"] == "text"
