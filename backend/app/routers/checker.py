from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import HTTPException

from app.services.checker_service import check_resume

from app.utils.pdf_utils import save_pdf
from app.utils.pdf_utils import delete_pdf

router = APIRouter(
    prefix="/resume",
    tags=["Resume Checker"]
)


@router.post("/check")
async def resume_checker( file: UploadFile = File(...)):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files allowed."
        )

    pdf_path = save_pdf(file)

    try:
        result = check_resume(pdf_path)
        return result

    finally:
        delete_pdf(pdf_path)