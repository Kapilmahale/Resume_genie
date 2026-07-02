# 🚀 Resume Genie

> **AI-Powered Resume Analysis, ATS Scoring, Cover Letter Generation &
> Career Coaching**

Resume Genie is a full-stack Generative AI application that helps job
seekers optimize their resumes for Applicant Tracking Systems (ATS),
generate tailored cover letters, and receive personalized career
guidance using Large Language Models.

------------------------------------------------------------------------
<img width="943" height="442" alt="image" src="https://github.com/user-attachments/assets/7bc82a3a-6d1b-4809-b0dc-b7470bd7c031" />


## ✨ Features

### 📊 Resume Score

-   Overall Resume Score (/100)
-   ATS Compatibility Score
-   Keyword Match Analysis
-   Missing Keywords Detection
-   Readability Score
-   Skill Gap Analysis
-   Industry-specific Feedback
-   Actionable Improvement Suggestions

### 📄 Resume Checker

-   Resume Quality Review
-   Strengths & Weaknesses
-   Missing Skills
-   Resume Verdict
-   Interview Readiness
-   Improvement Recommendations

### ✍️ Cover Letter Generator

Generate personalized, ATS-friendly cover letters based on: - Candidate
Resume - Target Job Description

### 🤖 AI Career Coach

An AI assistant that understands the uploaded resume and answers
questions about: - Career paths - Resume improvements - Interview
preparation - Skill recommendations - Placement guidance

------------------------------------------------------------------------

# 🏗️ Architecture

``` text
                React + Vite
                     │
               Axios REST API
                     │
             FastAPI Backend
                     │
         LangChain + Gemini 2.5
                     │
           Resume PDF Processing
```

------------------------------------------------------------------------

# 🛠️ Tech Stack

  Category         Technologies
  ---------------- ------------------------------------------------
  Frontend         React, Vite, Tailwind CSS, Axios, React Router
  Backend          FastAPI, Python, Pydantic
  AI               Google Gemini 2.5 Flash Lite, LangChain
  PDF Processing   PyPDF
  Deployment       Vercel, Render

------------------------------------------------------------------------

# 📁 Project Structure

``` text
Resume_Genie/
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── utils/
│   │   └── main.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
└── .gitignore
```

------------------------------------------------------------------------

# ⚙️ Local Setup

## Clone Repository

``` bash
git clone https://github.com/<your-username>/resume-genie.git
cd resume-genie
```

## Backend

``` bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/macOS
source venv/bin/activate

pip install -r requirements.txt
```

Create `.env`

``` env
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

Run backend

``` bash
uvicorn app.main:app --reload
```

## Frontend

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

# 🌐 Deployment

  Service    Platform
  ---------- ----------
  Frontend   Vercel
  Backend    Render

Frontend environment variable:

``` env
VITE_API_URL=https://your-backend.onrender.com
```

Backend environment variable:

``` env
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

------------------------------------------------------------------------

# 📡 API Endpoints

  Method   Endpoint            Description
  -------- ------------------- -------------------------------
  POST     `/resume/score`     ATS & Resume Scoring
  POST     `/resume/check`     Resume Quality Analysis
  POST     `/cover/generate`   Cover Letter Generation
  POST     `/chat/start`       Start AI Career Coach Session
  POST     `/chat/message`     Chat with Career Coach
  GET      `/health`           Health Check

------------------------------------------------------------------------

# 💡 Future Enhancements

-   User Authentication
-   Resume History
-   Resume Version Comparison
-   Interview Simulator
-   Job Recommendations
-   PDF Export
-   Multiple Resume Management
-   Multi-language Support

------------------------------------------------------------------------

# 📚 What I Learned

-   Building REST APIs with FastAPI
-   Integrating Google Gemini using LangChain
-   Prompt Engineering & Structured Outputs
-   PDF Parsing & File Upload Handling
-   React + FastAPI Integration
-   Deploying AI Applications using Vercel & Render
-   Managing Environment Variables & CORS

------------------------------------------------------------------------

# 👨‍💻 Author

**Kapil Mahale**

------------------------------------------------------------------------

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
