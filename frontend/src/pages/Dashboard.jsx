import Layout from "../components/layout/Layout";
import {
  FileSearch,
  ClipboardCheck,
  FileText,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const features = [
    {
      title: "Resume Score",
      description: "Get ATS score, keyword match and detailed analysis.",
      icon: <FileSearch size={32} className="text-green-600" />,
      path: "/resume/score",
    },
    {
      title: "Resume Checker",
      description: "Identify strengths, weaknesses and missing skills.",
      icon: <ClipboardCheck size={32} className="text-green-600" />,
      path: "/resume/check",
    },
    {
      title: "Cover Letter",
      description: "Generate personalized ATS-friendly cover letters.",
      icon: <FileText size={32} className="text-green-600" />,
      path: "/cover/genrator",
    },
    {
      title: "Career Coach",
      description: "Chat with AI for interview and career guidance.",
      icon: <MessageCircle size={32} className="text-green-600" />,
      path: "/career/coach",
    },
  ];

  return (
    <Layout>
      {/* Hero */}

      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white shadow-md">

        <h1 className="text-4xl font-bold">
          Resume Genie 🤖
        </h1>

        <p className="mt-3 text-lg text-green-100 max-w-2xl">
          Build stronger resumes, improve ATS score, generate cover letters,
          and get personalized career advice — all in one place.
        </p>
      </div>

      {/* Feature Cards */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Explore Features
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {features.map((feature) => (

            <Link
              key={feature.title}
              to={feature.path}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                    {feature.icon}

                  </div>

                  <h3 className="text-xl font-semibold mt-5">

                    {feature.title}

                  </h3>

                  <p className="text-gray-500 mt-2 leading-6">

                    {feature.description}

                  </p>

                </div>

                <ArrowRight
                  className="text-gray-400"
                  size={22}
                />

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* How It Works */}

      <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">
          How Resume Genie Works
        </h2>

        <div className="grid grid-cols-5 gap-6 text-center">

          <div>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto text-xl">
              📄
            </div>
            <p className="mt-3 font-medium">Upload Resume</p>
          </div>

          <div>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto text-xl">
              📋
            </div>
            <p className="mt-3 font-medium">Paste Job Description</p>
          </div>

          <div>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto text-xl">
              🤖
            </div>
            <p className="mt-3 font-medium">AI Analysis</p>
          </div>

          <div>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto text-xl">
              ✨
            </div>
            <p className="mt-3 font-medium">Improve Resume</p>
          </div>

          <div>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto text-xl">
              🚀
            </div>
            <p className="mt-3 font-medium">Apply with Confidence</p>
          </div>

        </div>

      </div>

      {/* Tips */}

      <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-green-800 mb-4">
          💡 AI Resume Tips
        </h2>

        <ul className="space-y-3 text-gray-700 list-disc pl-6">

          <li>Tailor your resume for every job application.</li>

          <li>Use action verbs and measurable achievements.</li>

          <li>Keep your resume ATS-friendly and easy to scan.</li>

          <li>Highlight projects relevant to the job description.</li>

          <li>Update your resume regularly as you gain experience.</li>

        </ul>

      </div>

    </Layout>
  );
}

export default Dashboard;