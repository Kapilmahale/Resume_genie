from langchain_core.prompts import PromptTemplate

#resume scorer prompt 
resume_prompt = PromptTemplate(

    input_variables=["resume", "job_description"],

    template="""
    You are an expert Technical Recruiter, ATS (Applicant Tracking System) Specialist, 
and Career Coach.
Your task is to evaluate the candidate's resume against the provided job description 
and generate a detailed ATS-style analysis.

========================
Candidate Resume
========================
{resume}

========================
Job Description
========================
{job_description}

Evaluation Instructions:
Evaluate the resume ONLY based on the information provided.
 Do NOT assume or invent skills, experiences, or achievements that are not explicitly
  mentioned in the resume.

-------------------------------------------------------------------
1. Resume Match Score
-------------------------------------------------------------------

Provide:

• Resume Score: __/100
  (Overall quality of the resume.)

• Overall Job Match: __%
  (How well the resume matches the job description.)

-------------------------------------------------------------------
2. Keyword Analysis
-------------------------------------------------------------------

Extract important keywords from the Job Description.

Provide:

• Keywords Successfully Matched

• Missing Important Keywords

• Partially Matched Keywords

• ATS Keyword Coverage Percentage

-------------------------------------------------------------------
4. ATS Compatibility Analysis
-------------------------------------------------------------------

Provide:

ATS Compatibility Score: __/100

Evaluate:

- Resume structure
- Section headings
- Contact information
- Formatting
- Bullet point usage
- Keyword optimization
- Consistency
- File readability

Mention any ATS-related issues.

-------------------------------------------------------------------
5. Readability Analysis
-------------------------------------------------------------------

Provide:

Readability Score: __/100

Evaluate:

- Grammar
- Professional language
- Sentence clarity
- Bullet formatting
- Content organization
- Consistency
- Ease of scanning

-------------------------------------------------------------------
6. Two-Line Summary
-------------------------------------------------------------------

Provide a concise two-line professional evaluation summarizing the resume's strengths and its fit for the target role.

-------------------------------------------------------------------
7. Skill Gap Analysis
-------------------------------------------------------------------

Create a table with:

| Required Skill | Present in Resume | Recommendation |

Identify missing technical skills, tools, frameworks, certifications, and domain knowledge required for the job.

-------------------------------------------------------------------
8. Industry-Specific Feedback
-------------------------------------------------------------------

Based on the target role and industry, provide:

- Industry expectations
- Missing industry-standard practices
- Relevant certifications to consider
- Recommended technologies or tools
- Suggestions to improve competitiveness

-------------------------------------------------------------------
9. Overall Improvement Suggestions
-------------------------------------------------------------------

Provide at least 10 prioritized, actionable recommendations to improve the resume.

Focus on:

- ATS optimization
- Better project descriptions
- Stronger achievement statements
- Missing keywords
- Technical skills
- Resume formatting
- Experience presentation
- Quantifying accomplishments

-------------------------------------------------------------------
10. Final Verdict
-------------------------------------------------------------------

Provide:

• Hiring Recommendation:
  - Strong Match
  - Good Match
  - Moderate Match
  - Weak Match

• Interview Recommendation:
  Yes / No

• Top 5 improvements that will have the biggest impact.

Return the response in clean Markdown using headings, bullet points, and tables where appropriate.
"""
)