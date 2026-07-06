from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.sql import func
from .database import Base


class Contact(Base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(256), nullable=False)
    email = Column(String(256), nullable=False, index=True)
    message = Column(Text, nullable=False)
    phone = Column(String(64), nullable=True)
    subject = Column(String(256), nullable=True)
    accepted = Column(Boolean, nullable=False, default=False)
    dm_plan = Column(String(256), nullable=True)
    website_plan = Column(String(256), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Blog(Base):
    __tablename__ = "blogs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(512), nullable=False)
    content = Column(Text, nullable=False)
    image_url = Column(String(1024), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
