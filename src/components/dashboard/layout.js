import Sidebar from "@/components/dashboard/sidebar"
import Navbar from "@/components/dashboard/navbar"

export default function DashboardLayout({ children }) {
    return (
        <div>
            <Sidebar >
                <Navbar />
                <main className="h-full">{children}</main>
            </Sidebar>
        </div>
    )
}
