from dotenv import load_dotenv
from langchain.chat_models import init_chat_model

from app.schemas import ResumeAnalysis

load_dotenv()

model = init_chat_model(
    "google_genai:gemini-2.5-flash-lite",
    temperature=0
)

structured_resume_model = model.with_structured_output(ResumeAnalysis)