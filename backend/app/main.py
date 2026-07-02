from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.resume import router as resume_router
from app.routers.checker import router as checker_router
from app.routers.cover import router as cover_router
from app.routers.chat import router as chat_router



app = FastAPI(
    title="Resume Genie API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://resume-genie-rust.vercel.app",
        "http://localhost:5173",
        "http://localhost:8000"
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(resume_router)
app.include_router(checker_router)
app.include_router(cover_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "message": "Resume Genie Backend Running 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }