import {
    LayoutDashboard,
    FileSearch,
    ClipboardCheck,
    FileText,
    MessageCircle
} from "lucide-react";

import { NavLink } from "react-router-dom";
import sidebarImage from "../../assets/fav_icon.png";

const menus = [

    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard
    },

    {
        name: "Resume Score",
        path: "/resume/score",
        icon: FileSearch
    },

    {
        name: "Resume Checker",
        path: "/resume/check",
        icon: ClipboardCheck
    },

    {
        name: "Cover Letter",
        path: "/cover/genrator",
        icon: FileText
    },

    {
        name: "Career Coach",
        path: "/career/coach",
        icon: MessageCircle
    }

];

function Sidebar() {

    return (

        <aside className="fixed left-0 top-0 h-screen w-60 bg-white border-r border-gray-200">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-green-700">
                    Resume Genie
                </h1>

            </div>
            <nav>
                {
                    menus.map((menu) => { const Icon = menu.icon;
                        return (
                            <NavLink key={menu.name} to={menu.path} className={({ isActive }) =>

                                    `flex items-center gap-3 px-6 py-4 transition
                                    ${isActive ? "bg-green-100 text-green-700" : "hover:bg-green-50"}`
                                }>
                                <Icon size={20} />
                                {menu.name}
                            </NavLink>
                        );
                    })

                }

            </nav>

             <img
            src={sidebarImage}
            alt="Logo"
            className="w-55 h-60 object-contain background-color-black"
        />

        </aside>

    );

}

export default Sidebar;