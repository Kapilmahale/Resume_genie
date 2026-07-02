import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (

        <div className="flex min-h-screen bg-[#F7FAF7]">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Navbar />
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>

    );
}

export default Layout;