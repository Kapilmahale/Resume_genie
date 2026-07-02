import { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
import { Upload, Copy, Download } from "lucide-react";

function CoverLetter() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCoverLetter = async () => {
    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter the job description.");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      setLoading(true);

      const response = await api.post(
        "/cover/generate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCoverLetter(response.data.cover_letter);

    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter);
    alert("Cover Letter copied!");
  };

  const downloadLetter = () => {

    const blob = new Blob(
      [coverLetter],
      { type: "text/plain" }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "Cover_Letter.txt";

    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <Layout>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Cover Letter Generator
        </h1>

        <p className="text-gray-500 mt-2">
          Generate an ATS-friendly cover letter tailored to the job description.
        </p>

      </div>

      {/* Input */}

      <div className="grid grid-cols-2 gap-6">

        {/* Upload */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

          <h2 className="font-semibold text-xl mb-4">
            Upload Resume
          </h2>

          <label className="border-2 border-dashed border-green-300 rounded-xl h-40 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition">

            <Upload
              size={38}
              className="text-green-600"
            />

            <p className="mt-4 text-gray-600">
              {file ? file.name : "Choose Resume PDF"}
            </p>

            <input
              hidden
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

          </label>

        </div>

        {/* JD */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

          <h2 className="font-semibold text-xl mb-4">
            Job Description
          </h2>

          <textarea
            rows={6}
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            className="w-full h-40 border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Paste Job Description..."
          />

        </div>

      </div>

      {/* Button */}

      <button
        onClick={generateCoverLetter}
        disabled={loading}
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate Cover Letter"}
      </button>

      {/* Output */}

      {coverLetter && (

        <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-semibold">
              Generated Cover Letter
            </h2>

            <div className="flex gap-3">

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <Copy size={18} />
                Copy
              </button>

              <button
                onClick={downloadLetter}
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <Download size={18} />
                Download
              </button>

            </div>

          </div>

          <textarea
            value={coverLetter}
            onChange={(e) =>
              setCoverLetter(e.target.value)
            }
            className="w-full h-[500px] border rounded-xl p-5 resize-none focus:outline-none"
          />

        </div>

      )}

    </Layout>
  );
}

export default CoverLetter;