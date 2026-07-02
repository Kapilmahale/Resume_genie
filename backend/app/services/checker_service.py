from app.llm import model
from app.prompts.checker_prompt import checker_prompt
from app.utils.pdf_utils import extract_resume_text

chain = checker_prompt | model

def check_resume(pdf_path: str):

    resume = extract_resume_text(pdf_path)

    result = chain.invoke(
        {
            "context": resume
        }
    )

    return result.model_dump()