from typing import List
from pydantic import BaseModel, Field


class ResumeScore(BaseModel):
    score: int = Field(description="Resume score out of 100")
    reason: str


class OverallMatch(BaseModel):
    percentage: int
    reason: str


class KeywordAnalysis(BaseModel):
    matched_keywords: List[str]
    missing_keywords: List[str]
    keyword_match_percentage: int


class Readability(BaseModel):
    score: int
    feedback: str


class ATS(BaseModel):
    score: int
    feedback: str


class SkillGap(BaseModel):
    missing_skills: List[str]
    recommendations: List[str]


class ResumeAnalysis(BaseModel):

    resume_score: ResumeScore

    overall_match: OverallMatch

    keyword_analysis: KeywordAnalysis

    readability: Readability

    ats: ATS

    summary: str

    skill_gap_analysis: SkillGap

    industry_specific_feedback: List[str]

    overall_improvement_suggestions: List[str]