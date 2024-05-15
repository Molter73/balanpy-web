import {styles} from "./styles"

const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec",
]

export default function Navbar() {
    let d = new Date()
    let time = `${d.getHours()}:${d.getMinutes()}`
    let date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`

    return <nav class="bg-balanpy-50">
        <div className={styles.root}>
            <div className="flex flex-col">
                <div className="text-emerald-800 font-bold text-2xl">
                    Hola Alejandro
                </div>
                <div className="text-balanpy-800 text-sm">
                    {`${time} ${date}`}
                </div>
            </div>
            <div className="flex">
                <div className="relative hidden md:block">
                    <div className={styles.search.root}>
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="search-navbar" className={styles.search.input} placeholder="CAMBIAR MASCOTA" />
                </div>
            </div>
            <div className="flex align-center justify-center items-center">
                <div className="bg-white p-2">
                    <img src="/dashboard/notification.svg" />
                </div>
                <div className="text-emerald-800 p-2">
                    Alejandro Delgado
                </div>
                <div>
                    <img className="max-h-[5rem]" src="/dashboard/usuario.png" />
                </div>
            </div>
        </div>
    </nav>
}
