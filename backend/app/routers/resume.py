from fastapi import APIRouter
from fastapi import UploadFile, File, Form, HTTPException

from app.services.resume_service import analyze_resume

from app.utils.pdf_utils import (save_pdf,delete_pdf)

router = APIRouter( prefix="/resume",tags=["Resume"])


@router.post("/score")
async def score_resume( file: UploadFile = File(...), job_description: str = Form(...) ):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files allowed."
        )

    pdf_path = save_pdf(file)

    try:

        result = analyze_resume( pdf_path, job_description)
        return result

    finally:
        delete_pdf(pdf_path)