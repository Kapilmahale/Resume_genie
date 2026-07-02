from fastapi import APIRouter
from fastapi import UploadFile, File, Form, HTTPException

from app.services.cover_service import generate_cover_letter

from app.utils.pdf_utils import save_pdf
from app.utils.pdf_utils import delete_pdf

router = APIRouter(
    prefix="/cover",
    tags=["Cover Letter"]
)


@router.post("/generate")
async def generate(

    file: UploadFile = File(...),
    job_description: str = Form(...) ):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files allowed."
        )

    pdf_path = save_pdf(file)

    try:
        result = generate_cover_letter( pdf_path, job_description)
        return result

    finally:
        delete_pdf(pdf_path)