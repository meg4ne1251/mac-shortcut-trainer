import uuid
from datetime import datetime
from pydantic import BaseModel, Field


# --- User ---

class UserCreate(BaseModel):
    nickname: str | None = None
    locale: str = "en"


class UserResponse(BaseModel):
    id: uuid.UUID
    nickname: str | None
    locale: str
    created_at: datetime

    model_config = {"from_attributes": True}


# --- ShortcutStat ---

class ShortcutStatResponse(BaseModel):
    shortcut_key: str
    avg_latency_ms: float
    total_attempts: int
    miss_count: int
    mastery_score: float

    model_config = {"from_attributes": True}


class UserStatsResponse(BaseModel):
    user_id: uuid.UUID
    stats: list[ShortcutStatResponse]
    weaknesses: list[ShortcutStatResponse]


# --- KeyLog ---

class KeyLogEntry(BaseModel):
    key: str
    latency_ms: float = Field(ge=0)
    is_miss: bool = False


# --- GameSession ---

class GameSessionCreate(BaseModel):
    user_id: uuid.UUID
    problem_key: str
    total_time_ms: int = Field(ge=0)
    total_misses: int = Field(ge=0, default=0)
    completed: bool = True
    key_logs: list[KeyLogEntry] = []


class GameSessionResponse(BaseModel):
    id: uuid.UUID
    user_id: uuid.UUID
    problem_id: uuid.UUID
    total_time_ms: int
    total_misses: int
    completed: bool
    played_at: datetime

    model_config = {"from_attributes": True}


# --- Problem ---

class ProblemResponse(BaseModel):
    id: uuid.UUID
    problem_key: str
    type: str
    difficulty: str
    initial_content: str
    goal_content: str
    required_keys: list[str]
    locale: str

    model_config = {"from_attributes": True}


class NextProblemRequest(BaseModel):
    user_id: uuid.UUID
    type: str | None = None  # "code" | "text" | None (any)
