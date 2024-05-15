import Sidebar from "@/components/dashboard/sidebar"
import Navbar from "@/components/dashboard/navbar"

export default function DashboardLayout({ children }) {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}
