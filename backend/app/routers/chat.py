from fastapi import (APIRouter,UploadFile,File,Form,HTTPException)

from app.utils.pdf_utils import (save_pdf,delete_pdf)

from app.services.chat_service import (start_chat,ask_question)

router = APIRouter(
    prefix="/chat",
    tags=["Career Coach"]
)


@router.post("/start")
async def start_chat_session( file: UploadFile = File(...)):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    pdf_path = save_pdf(file)

    try:
        result = start_chat(pdf_path)
        return result

    finally:
        delete_pdf(pdf_path)


@router.post("/message")
async def send_message( session_id: str = Form(...),question: str = Form(...)):

    return ask_question( session_id,question)