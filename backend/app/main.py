from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import get_settings
from app.middleware import RateLimitMiddleware
from app.routers import users, problems, sessions, health

settings = get_settings()

app = FastAPI(
    title="Refactoring Racer API",
    description="Backend API for the MacBook shortcut training game",
    version="0.2.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

# Rate limit POST requests: 60 per minute per IP
app.add_middleware(RateLimitMiddleware, max_requests=60, window_seconds=60)

app.include_router(health.router, prefix="/api")
app.include_router(users.router, prefix="/api")
app.include_router(problems.router, prefix="/api")
app.include_router(sessions.router, prefix="/api")
