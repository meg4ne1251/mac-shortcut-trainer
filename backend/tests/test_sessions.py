"""Tests for session API endpoints."""
import pytest
from httpx import AsyncClient
from app.models import Problem
from tests.conftest import TestSession


async def _seed_problem():
    """Seed a single test problem."""
    async with TestSession() as session:
        session.add(Problem(
            problem_key="p1", type="code", difficulty="easy",
            initial_content="const x = 1", goal_content="const x = 1;",
            required_keys=["ctrl_e"], locale="en",
        ))
        await session.commit()


@pytest.mark.asyncio
async def test_create_session(client: AsyncClient):
    await _seed_problem()
    user_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = user_resp.json()["id"]

    resp = await client.post("/api/sessions", json={
        "user_id": user_id,
        "problem_key": "p1",
        "total_time_ms": 5000,
        "total_misses": 2,
        "completed": True,
        "key_logs": [
            {"key": "ctrl_e", "latency_ms": 300, "is_miss": False},
            {"key": "ctrl_n", "latency_ms": 250, "is_miss": False},
            {"key": "mouse", "latency_ms": 100, "is_miss": True},
        ],
    })
    assert resp.status_code == 201
    data = resp.json()
    assert data["total_time_ms"] == 5000
    assert data["total_misses"] == 2
    assert data["completed"] is True


@pytest.mark.asyncio
async def test_create_session_updates_stats(client: AsyncClient):
    await _seed_problem()
    user_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = user_resp.json()["id"]

    # Play a session with some key logs
    await client.post("/api/sessions", json={
        "user_id": user_id,
        "problem_key": "p1",
        "total_time_ms": 5000,
        "total_misses": 0,
        "completed": True,
        "key_logs": [
            {"key": "ctrl_e", "latency_ms": 300, "is_miss": False},
            {"key": "ctrl_e", "latency_ms": 200, "is_miss": False},
        ],
    })

    # Check stats are updated
    stats_resp = await client.get(f"/api/users/{user_id}/stats")
    assert stats_resp.status_code == 200
    stats = stats_resp.json()["stats"]
    assert len(stats) == 1
    assert stats[0]["shortcut_key"] == "ctrl_e"
    assert stats[0]["total_attempts"] == 2
    assert stats[0]["avg_latency_ms"] == 250.0  # (300 + 200) / 2


@pytest.mark.asyncio
async def test_create_session_problem_not_found(client: AsyncClient):
    user_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = user_resp.json()["id"]

    resp = await client.post("/api/sessions", json={
        "user_id": user_id,
        "problem_key": "nonexistent",
        "total_time_ms": 5000,
        "total_misses": 0,
        "completed": True,
        "key_logs": [],
    })
    assert resp.status_code == 404


@pytest.mark.asyncio
async def test_create_session_user_not_found(client: AsyncClient):
    await _seed_problem()
    resp = await client.post("/api/sessions", json={
        "user_id": "00000000-0000-0000-0000-000000000000",
        "problem_key": "p1",
        "total_time_ms": 5000,
        "total_misses": 0,
        "completed": True,
        "key_logs": [],
    })
    assert resp.status_code == 404
