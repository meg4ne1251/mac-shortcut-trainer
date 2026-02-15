import uuid
from datetime import datetime, timezone
from sqlalchemy import String, Float, Integer, Boolean, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    nickname: Mapped[str | None] = mapped_column(String(100), nullable=True)
    locale: Mapped[str] = mapped_column(String(10), default="en")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=_utcnow, onupdate=_utcnow)

    shortcut_stats: Mapped[list["UserShortcutStat"]] = relationship(back_populates="user", cascade="all, delete-orphan")
    game_sessions: Mapped[list["GameSession"]] = relationship(back_populates="user", cascade="all, delete-orphan")


class UserShortcutStat(Base):
    __tablename__ = "user_shortcut_stats"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    shortcut_key: Mapped[str] = mapped_column(String(20))
    avg_latency_ms: Mapped[float] = mapped_column(Float, default=0.0)
    total_attempts: Mapped[int] = mapped_column(Integer, default=0)
    miss_count: Mapped[int] = mapped_column(Integer, default=0)
    mastery_score: Mapped[float] = mapped_column(Float, default=0.0)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=_utcnow, onupdate=_utcnow)

    user: Mapped["User"] = relationship(back_populates="shortcut_stats")


class Problem(Base):
    __tablename__ = "problems"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    problem_key: Mapped[str] = mapped_column(String(20), unique=True)
    type: Mapped[str] = mapped_column(String(10))
    difficulty: Mapped[str] = mapped_column(String(10))
    initial_content: Mapped[str] = mapped_column(Text)
    goal_content: Mapped[str] = mapped_column(Text)
    required_keys: Mapped[dict] = mapped_column(JSONB, default=list)
    locale: Mapped[str] = mapped_column(String(10), default="en")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=_utcnow)

    game_sessions: Mapped[list["GameSession"]] = relationship(back_populates="problem")


class GameSession(Base):
    __tablename__ = "game_sessions"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    problem_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("problems.id", ondelete="CASCADE"))
    total_time_ms: Mapped[int] = mapped_column(Integer)
    total_misses: Mapped[int] = mapped_column(Integer, default=0)
    completed: Mapped[bool] = mapped_column(Boolean, default=False)
    key_logs: Mapped[dict] = mapped_column(JSONB, default=list)
    played_at: Mapped[datetime] = mapped_column(DateTime, default=_utcnow)

    user: Mapped["User"] = relationship(back_populates="game_sessions")
    problem: Mapped["Problem"] = relationship(back_populates="game_sessions")
