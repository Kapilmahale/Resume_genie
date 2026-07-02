import os
import shutil
from fastapi import UploadFile
from langchain_community.document_loaders import PyPDFLoader
from app.config import UPLOAD_FOLDER

# UPLOAD_FOLDER = "app/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def save_pdf(file: UploadFile) -> str:
    """
    Save uploaded PDF and return its path.
    """

    file_path = os.path.join( UPLOAD_FOLDER,file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return file_path


def extract_resume_text(file_path: str) -> str:
    """
    Extract text from uploaded PDF.
    """

    loader = PyPDFLoader(file_path)

    documents = loader.load()

    resume_text = "\n\n".join(doc.page_content for doc in documents)

    return resume_text


def delete_pdf(file_path: str):
    """
    Delete uploaded PDF.
    """

    if os.path.exists(file_path):
        os.remove(file_path)