import { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

function ResumeScore() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {
    if (!file || !jobDescription) {
      alert("Please upload resume and enter Job Description.");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      setLoading(true);

      const response = await api.post(
        "/resume/score",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Resume Score
        </h1>

        <p className="text-gray-500 mt-2">
          Compare your resume with a job description and receive
          detailed AI feedback.
        </p>
      </div>

      {/* Upload Section */}

      <div className="grid grid-cols-2 gap-2 ">

        <div className="bg-white rounded-2xl border border-gray-200 p-2 shadow-sm h-65">

          <h2 className="font-semibold mb-4">
            Upload Resume
          </h2>

          <label className="border-2 border-dashed border-green-300 rounded-xl h-48 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition">

            <Upload size={40} className="text-green-600" />

            <p className="mt-4 text-gray-500">
              {file ? file.name : "Choose Resume PDF"}
            </p>

            <input type="file" accept=".pdf" hidden onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

          </label>

        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm h-65">

          <h2 className="font-semibold mb-4">
            Job Description
          </h2>

          <textarea
            rows={6}
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            className="w-full border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Paste Job Description..."
          />

        </div>

      </div>

      {/* Analyze Button */}

      <div className="mt-8">

        <button
          onClick={analyzeResume}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      {/* Results */}

      {result && (
        <>
          {/* Score Cards */}

          <div className="grid grid-cols-4 gap-6 mt-10">

            <StatCard
              title="Resume Score"
              value={result.resume_score.score}
            />

            <StatCard
              title="ATS Score"
              value={result.ats.score}
            />

            <StatCard
              title="Overall Match"
              value={`${result.overall_match.percentage}%`}
            />

            <StatCard
              title="Readability"
              value={result.readability.score}
            />

          </div>

          {/* Summary */}

          <SectionCard
            title="Professional Summary"
            icon={<Sparkles size={20} />}
          >
            {result.summary}
          </SectionCard>

          {/* Keywords */}

          <div className="grid grid-cols-2 gap-6 mt-6">

            <SectionCard
              title="Matched Keywords"
              icon={<CheckCircle2 size={20} />}
            >
              <div className="flex flex-wrap gap-3">
                {result.keyword_analysis.matched_keywords.map((k) => (
                  <span
                    key={k}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              title="Missing Keywords"
              icon={<AlertTriangle size={20} />}
            >
              <div className="flex flex-wrap gap-3">
                {result.keyword_analysis.missing_keywords.map((k) => (
                  <span
                    key={k}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </SectionCard>

          </div>

          {/* Suggestions */}

          <SectionCard
            title="Improvement Suggestions"
          >
            <ul className="list-disc ml-6 space-y-2">
              {result.overall_improvement_suggestions.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

        </>
      )}
    </Layout>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <p className="text-gray-500">{title}</p>

      <h2 className="text-4xl font-bold mt-3 text-green-600">
        {value}
      </h2>
    </div>
  );
}

function SectionCard({ title, icon, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-6">

      <div className="flex items-center gap-2 mb-4 font-semibold">

        {icon}

        {title}

      </div>

      {children}

    </div>
  );
}

export default ResumeScore;