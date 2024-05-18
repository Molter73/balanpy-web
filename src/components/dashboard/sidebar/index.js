import {navigation} from "@/constants/dashboard"

import NavigationItem from "./navigation-item"

export default function Sidebar({children}) {
    return (
        <div>
            <div className="fixed flex h-screen w-full max-w-[20rem] flex-col bg-white bg-clip-border justify-around align-center items-center">
                <div className="flex flex-col p-4 mb-2 items-center">
                    <img src="/balanpy.svg" />
                    <h5 className="block text-balanpy-800 text-xl font-bold">Balanpy</h5>
                </div>
                <nav aria-label="Sidebar" className="flex min-w-[240px] flex-col gap-1 p-2 text-balanpy-700">
                    {navigation.map((item, i) => {
                        return <NavigationItem key={i} href={item.href} text={item.text} image={item.image} />
                    })}
                </nav>
                <div className="border-2 rounded-3xl border-balanpy-700 p-2 flex flex-col max-w-[15rem] items-center text-center text-black">
                    <img src="/dashboard/diamond.svg" alt="Accede a premium" className="bg-balanpy-200 rounded-full p-3" />
                    <h5 className="block text-xl font-semibold">Accede a premium</h5>
                    Obtén ahora todas las características de Balanpy como registro de mascotas ilimitadas o descuentos en tu veterinario.

                </div>
            </div>
            <div className="sm:ml-[20rem]">
                {children}
            </div>
        </div>
    )
}
