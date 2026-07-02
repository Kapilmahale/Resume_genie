import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <FaRobot className="text-blue-500" />
          Resume Genie
        </Link>

        <div className="flex gap-6">

          <Link to="/resume-score">
            Resume Score
          </Link>

          <Link to="/resume-checker">
            Resume Checker
          </Link>

          <Link to="/cover-letter">
            Cover Letter
          </Link>

          <Link to="/career-coach">
            Career Coach
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;