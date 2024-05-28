import CurrentDateTime from "./date-time"
import SearchBar from "./searchbar"
import UserData from "./user-data"

export default function Navbar() {
    return (
        <nav className="bg-balanpy-50">
            <div className="max-w-screen-xl max-h-[6rem] flex items-center justify-between mx-auto p-8">
                <div className="flex flex-col">
                    <div className="text-black font-bold text-2xl">
                        Hola Alejandro
                    </div>
                    <CurrentDateTime />
                </div>
                <SearchBar />
                <UserData />
            </div>
        </nav>
    )
}
