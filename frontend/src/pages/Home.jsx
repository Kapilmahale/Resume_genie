import Layout from "../components/layout/Layout";
import {
  FileSearch,
  ClipboardCheck,
  FileText,
  MessageCircle,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const actions = [
    {
      title: "Upload Resume",
      subtitle: "Upload your PDF",
      icon: <Upload size={28} />,
      path: "/resume-score",
      color: "text-green-600",
    },
    {
      title: "Resume Score",
      subtitle: "Get detailed score",
      icon: <FileSearch size={28} />,
      path: "/resume-score",
      color: "text-blue-600",
    },
    {
      title: "Resume Checker",
      subtitle: "Find resume issues",
      icon: <ClipboardCheck size={28} />,
      path: "/resume-checker",
      color: "text-purple-600",
    },
    {
      title: "Cover Letter",
      subtitle: "Generate instantly",
      icon: <FileText size={28} />,
      path: "/cover-letter",
      color: "text-orange-500",
    },
    {
      title: "Career Coach",
      subtitle: "Ask AI anything",
      icon: <MessageCircle size={28} />,
      path: "/career-coach",
      color: "text-teal-600",
    },
  ];

  return (
    <Layout>
      {/* Welcome */}

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to Resume Genie 👋
        </h2>

        <p className="text-gray-500 mt-2">
          Analyze your resume, improve ATS score, generate cover letters and get
          AI-powered career guidance.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

          <p className="text-gray-500 text-sm">Resume Score</p>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            --
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Analyze a resume first
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

          <p className="text-gray-500 text-sm">
            ATS Compatibility
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            --
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Waiting for analysis
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

          <p className="text-gray-500 text-sm">
            Readability
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            --
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Waiting for analysis
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

          <p className="text-gray-500 text-sm">
            Overall Match
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            --
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Waiting for JD
          </p>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-12">

        <h2 className="text-2xl font-semibold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-5 gap-6">

          {actions.map((item) => (

            <Link
              key={item.title}
              to={item.path}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >

              <div className={item.color}>
                {item.icon}
              </div>

              <h3 className="font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {item.subtitle}
              </p>

            </Link>

          ))}

        </div>

      </div>

      {/* Recent Activity */}

      <div className="mt-12 grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

          <h2 className="text-xl font-semibold">
            Recent Analysis
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center">

            <FileSearch
              size={50}
              className="text-green-500"
            />

            <p className="text-gray-500 mt-4">
              No resume analyzed yet.
            </p>

            <Link
              to="/resume-score"
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
            >
              Analyze Resume
            </Link>

          </div>

        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 p-6">

          <h2 className="font-semibold text-lg">
            AI Tip 💡
          </h2>

          <p className="mt-4 text-gray-600 leading-7">

            Tailor your resume for every job application.
            Matching keywords from the job description can
            significantly improve your ATS score.

          </p>

        </div>

      </div>

    </Layout>
  );
}

export default Home;