import pytest
from app import db
from app.core.config import settings


@pytest.yield_fixture()
async def init_db():
    conn = await db.set_bind(settings.DATABASE_URI)
    yield conn
    await conn.close()
