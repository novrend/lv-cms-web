import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function Template() {
    return (
        <div className="flex overflow-hidden bg-gray-50 dark:bg-gray-900">
            <Sidebar />
            <div
                className="hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
                id="sidebarBackdrop"
            ></div>
            <div
                id="main-content"
                className="relative w-full h-screen overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
            >
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}