from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str
    phone: str | None = None
    subject: str | None = None
    accepted: bool | None = False
    dm_plan: str | None = Field(default=None, alias="dmPlan")
    website_plan: str | None = Field(default=None, alias="websitePlan")

    model_config = {
        "populate_by_name": True,
    }


class ContactOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    phone: str | None = None
    subject: str | None = None
    accepted: bool | None = False
    dm_plan: str | None = Field(default=None, alias="dmPlan")
    website_plan: str | None = Field(default=None, alias="websitePlan")
    created_at: datetime

    # Pydantic v2 compatibility: allow ORM objects via attributes
    model_config = {
        "from_attributes": True,
        "populate_by_name": True,
    }


class BlogCreate(BaseModel):
    title: str
    content: str
    image_url: str | None = None


class BlogOut(BaseModel):
    id: int
    title: str
    content: str
    image_url: str | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


class BlogUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    image_url: Optional[str] = None

    model_config = {"from_attributes": True}


class LoginRequest(BaseModel):
    username: str
    password: str

