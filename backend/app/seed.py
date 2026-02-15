"""Seed the problems table with the initial 5 problems."""
import asyncio
from sqlalchemy import select
from app.database import engine, async_session
from app.models import Base, Problem


PROBLEMS = [
    {
        "problem_key": "p1",
        "type": "code",
        "difficulty": "easy",
        "initial_content": 'const name = "Alice"\nconst age = 25\nconsole.log(name)',
        "goal_content": 'const name = "Alice";\nconst age = 25;\nconsole.log(name);',
        "required_keys": ["ctrl_e", "ctrl_n"],
        "locale": "en",
    },
    {
        "problem_key": "p2",
        "type": "code",
        "difficulty": "easy",
        "initial_content": "function addd(a, b) {\n  returnn a + b;\n}",
        "goal_content": "function add(a, b) {\n  return a + b;\n}",
        "required_keys": ["ctrl_f", "ctrl_d"],
        "locale": "en",
    },
    {
        "problem_key": "p3",
        "type": "code",
        "difficulty": "medium",
        "initial_content": 'function greet(name) {\n  console.log("DEBUG");\n  return `Hello, ${name}!`;\n}',
        "goal_content": "function greet(name) {\n  return `Hello, ${name}!`;\n}",
        "required_keys": ["ctrl_n", "ctrl_a", "ctrl_k"],
        "locale": "en",
    },
    {
        "problem_key": "p4",
        "type": "code",
        "difficulty": "medium",
        "initial_content": 'if  (x > 0)  {\n  console.log("positive")\n}',
        "goal_content": 'if (x > 0) {\n  console.log("positive");\n}',
        "required_keys": ["ctrl_f", "ctrl_d", "ctrl_e", "ctrl_n"],
        "locale": "en",
    },
    {
        "problem_key": "p5",
        "type": "code",
        "difficulty": "hard",
        "initial_content": 'function  calculate(x, y)  {\n  const result = x +  y;;\n  console.log("debug");\n  return result\n}',
        "goal_content": "function calculate(x, y) {\n  const result = x + y;\n  return result;\n}",
        "required_keys": ["ctrl_f", "ctrl_b", "ctrl_d", "ctrl_k", "ctrl_a", "ctrl_e", "ctrl_n"],
        "locale": "en",
    },
    # --- Text problems ---
    {
        "problem_key": "t1",
        "type": "text",
        "difficulty": "easy",
        "initial_content": "This is a testt message.\nPlease check it carefully.",
        "goal_content": "This is a test message.\nPlease check it carefully.",
        "required_keys": ["ctrl_f", "ctrl_d"],
        "locale": "en",
    },
    {
        "problem_key": "t2",
        "type": "text",
        "difficulty": "easy",
        "initial_content": "The meeting is scheduled for Monday\nPlease confirm your attendance",
        "goal_content": "The meeting is scheduled for Monday.\nPlease confirm your attendance.",
        "required_keys": ["ctrl_e", "ctrl_n"],
        "locale": "en",
    },
    {
        "problem_key": "t3",
        "type": "text",
        "difficulty": "medium",
        "initial_content": "Dear Team,\nTODO: remove this line\nWe are pleased to announce the new policy.",
        "goal_content": "Dear Team,\nWe are pleased to announce the new policy.",
        "required_keys": ["ctrl_n", "ctrl_a", "ctrl_k"],
        "locale": "en",
    },
    {
        "problem_key": "t4",
        "type": "text",
        "difficulty": "medium",
        "initial_content": "The  quick  brown fox\njumps  over the  lazy dog",
        "goal_content": "The quick brown fox\njumps over the lazy dog.",
        "required_keys": ["ctrl_f", "ctrl_d", "ctrl_e", "ctrl_n"],
        "locale": "en",
    },
    {
        "problem_key": "t5",
        "type": "text",
        "difficulty": "hard",
        "initial_content": "Subject:  Project Update\nDRAFT - DO NOT SEND\nHi  everyone,\nThe deadline has been  extended to Friday\nBest regards",
        "goal_content": "Subject: Project Update\nHi everyone,\nThe deadline has been extended to Friday.\nBest regards.",
        "required_keys": ["ctrl_f", "ctrl_b", "ctrl_d", "ctrl_k", "ctrl_a", "ctrl_e", "ctrl_n"],
        "locale": "en",
    },
]


async def seed():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as session:
        for p in PROBLEMS:
            result = await session.execute(
                select(Problem).where(Problem.problem_key == p["problem_key"])
            )
            if result.scalar_one_or_none() is None:
                session.add(Problem(**p))
        await session.commit()
    print(f"Seeded {len(PROBLEMS)} problems.")


if __name__ == "__main__":
    asyncio.run(seed())
