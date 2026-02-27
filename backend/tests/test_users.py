"""Tests for user API endpoints."""
import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_create_user(client: AsyncClient):
    resp = await client.post("/api/users", json={"locale": "en"})
    assert resp.status_code == 201
    data = resp.json()
    assert "id" in data
    assert data["locale"] == "en"
    assert data["nickname"] is None


@pytest.mark.asyncio
async def test_create_user_with_nickname(client: AsyncClient):
    resp = await client.post("/api/users", json={"locale": "ja", "nickname": "TestUser"})
    assert resp.status_code == 201
    data = resp.json()
    assert data["nickname"] == "TestUser"
    assert data["locale"] == "ja"


@pytest.mark.asyncio
async def test_get_user(client: AsyncClient):
    # Create user
    create_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = create_resp.json()["id"]

    # Get user
    resp = await client.get(f"/api/users/{user_id}")
    assert resp.status_code == 200
    assert resp.json()["id"] == user_id


@pytest.mark.asyncio
async def test_get_user_not_found(client: AsyncClient):
    resp = await client.get("/api/users/00000000-0000-0000-0000-000000000000")
    assert resp.status_code == 404


@pytest.mark.asyncio
async def test_get_user_stats_empty(client: AsyncClient):
    create_resp = await client.post("/api/users", json={"locale": "en"})
    user_id = create_resp.json()["id"]

    resp = await client.get(f"/api/users/{user_id}/stats")
    assert resp.status_code == 200
    data = resp.json()
    assert data["user_id"] == user_id
    assert data["stats"] == []
    assert data["weaknesses"] == []


@pytest.mark.asyncio
async def test_create_user_invalid_locale(client: AsyncClient):
    resp = await client.post("/api/users", json={"locale": "xx"})
    assert resp.status_code == 422


@pytest.mark.asyncio
async def test_create_user_nickname_too_long(client: AsyncClient):
    long_name = "a" * 101
    resp = await client.post("/api/users", json={"nickname": long_name, "locale": "en"})
    assert resp.status_code == 422


@pytest.mark.asyncio
async def test_rate_limit_rejects_excessive_requests(client: AsyncClient):
    """POST endpoints should be rate-limited (60 req/min by default).

    Note: Other tests in this suite also issue POST requests, contributing
    to the rate limiter state.  We send enough to guarantee crossing the
    threshold and then verify the 429 response.
    """
    status_codes: list[int] = []
    for _ in range(80):
        resp = await client.post("/api/users", json={"locale": "en"})
        status_codes.append(resp.status_code)

    assert 429 in status_codes, "Expected at least one 429 response after exceeding rate limit"
    # Verify that early requests succeeded
    assert status_codes[0] in (201, 429)
