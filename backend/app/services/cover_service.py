from app.llm import model

from app.prompts.cover_prompt import cover_prompt

from app.utils.pdf_utils import extract_resume_text

chain = cover_prompt | model


def generate_cover_letter(
    pdf_path: str,
    job_description: str
):

    resume = extract_resume_text(pdf_path)

    response = chain.invoke(
        {
            "resume": resume,
            "job_description": job_description
        }
    )

    return {
        "cover_letter": response.content
    }