from app.prompts.resume_prompt import resume_prompt
from app.llm import structured_resume_model

from app.utils.pdf_utils import extract_resume_text

chain = resume_prompt | structured_resume_model


def analyze_resume(pdf_path: str, job_description: str):

    resume_text = extract_resume_text(pdf_path)

    try:
        resume = extract_resume_text(pdf_path)
        result = chain.invoke(
            {
                "resume": resume,
                "job_description": job_description
            }
        )

        return result.model_dump()

    except Exception as e:
        raise Exception(f"Resume Analysis Failed: {str(e)}")