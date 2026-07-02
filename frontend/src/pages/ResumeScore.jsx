import { useState } from "react";

import Layout from "../components/Layout";
import UploadBox from "../components/UploadBox";
import Loading from "../components/Loading";
import ScoreCard from "../components/ScoreCard";

import api from "../services/api";

function ResumeScore() {

    const [file, setFile] = useState(null);

    const [jobDescription, setJobDescription] = useState("");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const analyzeResume = async () => {

        if (!file) { alert("Upload Resume"); return; }

        if (!jobDescription) {
            alert("Enter Job Description");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        formData.append("job_description", jobDescription);

        try {

            setLoading(true);

            const response = await api.post("/resume/score", formData,
                {
                    headers: {"Content-Type": "multipart/form-data"}
                }
            );

            setResult(response.data);

        }

        catch (err) {
            console.log(err);
            alert("Something went wrong.");
        }

        finally {
            setLoading(false);
        }

    };

    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-8"> Resume Score</h1>

            <UploadBox onFileSelect={setFile} />

            <textarea
                rows={8}
                value={jobDescription}

                onChange={(e)=>setJobDescription(e.target.value)}

                className="w-full mt-8 bg-slate-900 rounded-xl p-4"
                placeholder="Paste Job Description"
            />

            <button onClick={analyzeResume} className="bg-blue-600 px-8 py-3 rounded-xl mt-6">
                Analyze Resume
            </button>

            {loading && <Loading />}

            {result && (

                <div className="grid grid-cols-2 gap-6 mt-10">

                    <ScoreCard title="Resume Score" value={result.resume_score.score} />

                    <ScoreCard title="ATS Score" value={result.ats.score} />

                    <ScoreCard title="Overall Match" value={result.overall_match.percentage+"%"} />

                    <ScoreCard title="Readability" value={result.readability.score} />

                </div>

            )}

        </Layout>

    );

}

export default ResumeScore;