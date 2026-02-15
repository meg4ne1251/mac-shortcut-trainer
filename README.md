# Refactoring Racer ⌨️

A MacBook shortcut training game that helps you master Emacs-style cursor shortcuts (Ctrl+A/E/F/B/N/K/D …) by editing code and text to match a goal state — as fast as possible.

## Features

- **Code & Text modes** — practice on code-editing or prose-editing problems
- **Adaptive mode** — server-driven problem selection based on your weakest shortcuts
- **Real-time diff** — see exactly what needs to change, character by character
- **Per-key stats** — latency, miss rate, and mastery score for every shortcut
- **Bilingual** — English / Japanese UI (i18next)
- **Persistent progress** — results saved to PostgreSQL via REST API

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite 6, Tailwind CSS 4, Zustand |
| Backend | Python 3.12, FastAPI, async SQLAlchemy 2, asyncpg |
| Database | PostgreSQL 16 |
| Testing | Vitest + Testing Library (frontend), pytest + pytest-asyncio (backend) |
| Infra | Docker Compose (3 services) |

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js ≥ 18 (for local frontend dev)
- Python ≥ 3.12 (for local backend dev)

### Run with Docker Compose

```bash
docker compose up --build
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| API | http://localhost:8000/api |
| API docs | http://localhost:8000/docs |

### Local Development

**Frontend:**

```bash
npm install
npm run dev        # http://localhost:5173
npm run test       # run Vitest
```

**Backend:**

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
# Needs DATABASE_URL env var pointing to a running PostgreSQL
uvicorn app.main:app --reload --port 8000
pytest             # run tests (uses SQLite in-memory)
```

## Project Structure

```
├── src/
│   ├── components/       # React components (screens, UI)
│   ├── data/             # Problem definitions (10 problems)
│   ├── hooks/            # useKeyHandler — keyboard shortcut engine
│   ├── i18n/             # en.json, ja.json
│   ├── store/            # Zustand game store
│   ├── test/             # Frontend tests (42 tests)
│   └── utils/            # Helpers (formatTime, storage)
├── backend/
│   ├── app/
│   │   ├── models.py     # SQLAlchemy models
│   │   ├── routers/      # FastAPI routes (users, problems, sessions)
│   │   ├── schemas.py    # Pydantic schemas
│   │   ├── seed.py       # DB seeder
│   │   └── main.py       # App entrypoint
│   └── tests/            # Backend tests (17 tests)
├── docker-compose.yml
└── Dockerfile.frontend
```

## Trained Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl + A | Move to line start |
| Ctrl + E | Move to line end |
| Ctrl + F | Move cursor right |
| Ctrl + B | Move cursor left |
| Ctrl + N | Move cursor down |
| Ctrl + K | Kill to end of line |
| Ctrl + D | Delete character forward |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/problems` | List all problems (filter by type/difficulty) |
| GET | `/api/problems/{key}` | Get problem by key |
| GET | `/api/problems/next` | Adaptive next problem for user |
| POST | `/api/users` | Create user |
| GET | `/api/users/{id}` | Get user with stats |
| POST | `/api/sessions` | Submit game session |
| GET | `/health` | Health check |

## License

MIT
