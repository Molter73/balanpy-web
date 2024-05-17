import Sidebar from "@/components/dashboard/sidebar"
import Navbar from "@/components/dashboard/navbar"

import "./styles.css";

export default function DashboardLayout({ children }) {
    return (
        <div className="">
            <Sidebar />
            <div className="sm:ml-[20rem]">
                <Navbar />
                <main className="h-full">{children}</main>
            </div>
        </div>
    )
}
