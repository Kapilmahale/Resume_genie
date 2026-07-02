import { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
import ReactMarkdown from "react-markdown";
import { Upload } from "lucide-react";

function ResumeChecker() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const checkResume = async () => {

        if (!file) {
            alert("Please upload your resume.");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);
        formData.append("job_description", jobDescription);

        try {

            setLoading(true);

            const response = await api.post(
                "/resume/check",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            /*
            Backend returns

            {
                "analysis":"markdown..."
            }

            */

            setAnalysis(response.data.analysis);

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

            {/* Heading */}

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-gray-800">

                    Resume Checker

                </h1>

                <p className="text-gray-500 mt-2">

                    Get a detailed AI review of your resume.

                </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

    {/* Upload */}

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <h2 className="text-xl font-semibold mb-4">
            Upload Resume
        </h2>

        <label className="border-2 border-dashed border-green-300 rounded-xl h-40 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50">

            <Upload size={36} className="text-green-600"/>

            <p className="mt-4 text-gray-600">
                {file ? file.name : "Choose Resume PDF"}
            </p>

            <input
                hidden
                type="file"
                accept=".pdf"
                onChange={(e)=>setFile(e.target.files[0])}
            />

        </label>

    </div>

    {/* Job Description */}

    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <h2 className="text-xl font-semibold mb-4">
            Job Description
        </h2>

        <textarea
            rows={6}
            value={jobDescription}
            onChange={(e)=>setJobDescription(e.target.value)}
            className="w-full h-40 border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Paste Job Description..."
        />

    </div>

</div>

            {/* Button */}

            <button

                onClick={checkResume}

                disabled={loading}

                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"

            >

                {

                    loading

                        ? "Checking..."

                        : "Check Resume"

                }

            </button>

            {/* Output */}

            {

                analysis &&

                <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

                    <h2 className="text-2xl font-semibold mb-6">

                        Resume Analysis

                    </h2>

                    <div className="prose prose-green max-w-none">

                        <ReactMarkdown>

                            {analysis}

                        </ReactMarkdown>

                    </div>

                </div>

            }

        </Layout>

    );

}

export default ResumeChecker;