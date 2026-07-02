import { Link } from "react-router-dom";

function FeatureCard({
    title,
    description,
    icon,
    link
}) {
    return (
        <Link
            to={link}
            className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500 transition"
        >
            <div className="text-5xl mb-4">
                {icon}
            </div>

            <h2 className="text-xl font-semibold">
                {title}
            </h2>

            <p className="text-slate-400 mt-3">
                {description}
            </p>
        </Link>
    );
}

export default FeatureCard;