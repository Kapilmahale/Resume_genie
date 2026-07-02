import { Bell } from "lucide-react";

function Navbar() {

    return (

        <header className="bg-white border-b border-gray-200 px-10 py-6 flex justify-between items-center">

            <div>
                <h1 className="text-3xl font-bold">
                    Hyy! 👋
                </h1>

                <p className="text-gray-500">
                    Let's improve your resume and accelerate your career.
                </p>
            </div>

            <div className="flex items-center gap-6">
                <Bell />
                <div className="h-10 w-10 rounded-full bg-green-600 text-white flex justify-center items-center font-semibold">
                    RG
                </div>
            </div>

        </header>

    );

}

export default Navbar;