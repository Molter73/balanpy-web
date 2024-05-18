import {styles} from "./styles"

import CurrentDateTime from "./date-time"
import SearchBar from "./searchbar"
import UserData from "./user-data"

export default function Navbar() {
    return <nav className="bg-balanpy-50">
        <div className={styles.root}>
            <div className="flex flex-col">
                <div className="text-emerald-800 font-bold text-2xl">
                    Hola Alejandro
                </div>
                <CurrentDateTime />
            </div>
            <SearchBar />
            <UserData />
        </div>
    </nav>
}
