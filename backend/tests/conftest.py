"""Shared test fixtures for backend tests."""
import os
import pytest
from httpx import AsyncClient, ASGITransport
from sqlalchemy import event
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession

# Use in-memory SQLite for tests
os.environ["DATABASE_URL"] = "sqlite+aiosqlite:///:memory:"

from app.models import Base  # noqa: E402
from app.main import app  # noqa: E402
from app.database import get_db  # noqa: E402


# Create test engine and session
test_engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
TestSession = async_sessionmaker(test_engine, class_=AsyncSession, expire_on_commit=False)


# Override JSONB/UUID for SQLite compatibility
from sqlalchemy.dialects.postgresql import JSONB, UUID as PG_UUID  # noqa: E402
from sqlalchemy import JSON, String  # noqa: E402

# Monkey-patch JSONB to render as JSON in SQLite
_orig_jsonb_compile = None


@event.listens_for(test_engine.sync_engine, "connect")
def _set_sqlite_pragma(dbapi_conn, connection_record):
    """Enable WAL and foreign keys for SQLite."""
    cursor = dbapi_conn.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


# Override PostgreSQL types for SQLite at the type compiler level
from sqlalchemy.dialects.sqlite.base import SQLiteTypeCompiler  # noqa: E402

_orig_visit_uuid = getattr(SQLiteTypeCompiler, 'visit_UUID', None)
_orig_visit_jsonb = getattr(SQLiteTypeCompiler, 'visit_JSONB', None)

SQLiteTypeCompiler.visit_UUID = lambda self, type_, **kw: "VARCHAR(36)"
SQLiteTypeCompiler.visit_JSONB = lambda self, type_, **kw: "TEXT"


async def override_get_db():
    async with TestSession() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


app.dependency_overrides[get_db] = override_get_db


@pytest.fixture(autouse=True)
async def setup_db():
    """Create tables before each test, drop after."""
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


@pytest.fixture
async def client():
    """Async test client for the FastAPI app."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac
