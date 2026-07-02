import Layout from "../components/Layout";
import FeatureCard from "../components/FeatureCard";

import {
    FaChartLine,
    FaSearch,
    FaFileAlt,
    FaComments
} from "react-icons/fa";

function Home() {
    return (
        <Layout>

            <div className="text-center">

                <h1 className="text-6xl font-bold">

                    Resume Genie

                </h1>

                <p className="mt-6 text-slate-400 text-xl">

                    AI-powered Resume Analysis Platform

                </p>

            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">

                <FeatureCard
                    title="Resume Score"
                    description="Compare your resume with a Job Description."
                    icon={<FaChartLine />}
                    link="/resume-score"
                />

                <FeatureCard
                    title="Resume Checker"
                    description="Get detailed feedback on your resume."
                    icon={<FaSearch />}
                    link="/resume-checker"
                />

                <FeatureCard
                    title="Cover Letter"
                    description="Generate ATS-friendly cover letters."
                    icon={<FaFileAlt />}
                    link="/cover-letter"
                />

                <FeatureCard
                    title="Career Coach"
                    description="Chat with your personal AI Career Coach."
                    icon={<FaComments />}
                    link="/career-coach"
                />

            </div>

        </Layout>
    );
}

export default Home;