import uuid

from langchain_core.messages import ( SystemMessage, HumanMessage,AIMessage)

from app.llm import model
from app.utils.pdf_utils import extract_resume_text


# session_id -> {
#     "resume": "...",
#     "history": [...]
# }
chat_sessions = {}


def start_chat(pdf_path: str):

    resume = extract_resume_text(pdf_path)

    session_id = str(uuid.uuid4())

    system_message = SystemMessage(
        content=f"""
You are a professional career coach and resume mentor.

You help with:

- Career Guidance
- Resume Improvements
- Interview Preparation
- Job Search Strategy
- Skill Gap Analysis

Candidate Resume:

{resume}
"""
)

    chat_sessions[session_id] = {
        "resume": resume,
        "history": [system_message]
    }

    return {
        "session_id": session_id
    }


def ask_question(session_id: str, question: str):

    if session_id not in chat_sessions:

        return {
            "error": "Invalid Session"
        }

    history = chat_sessions[session_id]["history"]

    history.append( HumanMessage(content=question))

    response = model.invoke(history)

    history.append( AIMessage(content=response.content))

    return {
        "answer": response.content
    }