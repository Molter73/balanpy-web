import StatusBar from "@/components/dashboard/statusbar"
import ActivityButton from "@/components/dashboard/activity-button"
import InformationButton from "@/components/dashboard/information-button"
import ActivityRow from "@/components/dashboard/activity-row"
import Pet from "@/components/dashboard/pet"

let container_style = "flex flex-col bg-white align-center justify-between items-between border-2 border-balanpy-800 rounded-xl p-2"

export default function Page() {
    const feed_activity = {
        src: "/dashboard/food.svg",
        alt: "comida",
        background: "bg-balanpy-800",
    }

    const feed_state = {
        text: "Completado",
        background: "bg-balanpy-700",
    }

    const incomplete_activity = {
        src: "/dashboard/question.svg",
        alt: "actividad incompleta",
        background: "bg-gray-500",
    }

    const incomplete_state = {
        text: "No History",
        background: "bg-gray-500",
    }

    const dog_icon = {
        src: "/dashboard/dog.svg",
        alt: "perro",
    }

    const cat_icon = {
        src: "/dashboard/cat.svg",
        alt: "gato",
    }

    return <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-2">
        <div className={`${container_style} col-span-4`} >
            <div className="flex grid gap-4 grid-cols-4 grid-rows-1">
                <div className="flex flex-col col-span-1 border-2 rounded-xl border-balanpy-800 align-center justify-center items-center p-2 text-black text-base font-semibold">
                    <img src="/dashboard/pet.png" alt="Your pet" className="rounded-full" />
                    <StatusBar name="Comida" bg_color="bg-balanpy-600" perc="75%" />
                    <StatusBar name="Paseos" bg_color="bg-balanpy-600" perc="95%" />
                    <StatusBar name="Higiene" bg_color="bg-yellow-500" perc="50%" />
                    <StatusBar name="Vacunacion" bg_color="bg-red-700" perc="15%" />
                </div>
                <div className="flex flex-col text-center align-center justify-center items-center col-span-3">
                    <span className="text-xl text-balanpy-800 font-bold">¿Qué quieres hacer?</span>
                    <div className="flex flex-row">
                        <ActivityButton text="Añadir Comida" image="/dashboard/mascotas.svg" alt_text="añadir comida" />
                        <ActivityButton text="Añadir Baño" image="/dashboard/bano.svg" alt_text="añadir baño" />
                        <ActivityButton text="Añadir Cepillado" image="/dashboard/cepillo.svg" alt_text="añadir cepillado" />
                        <ActivityButton text="Añadir Paseo" image="/dashboard/paseo.svg" alt_text="añadir paseo" />
                    </div>
                    <span className="text-xl text-balanpy-800 font-bold">¿Qué información necesitas?</span>
                    <div className="flex flex-row p-2">
                        <InformationButton text="Visualizar DNI Mascota" />
                        <InformationButton text="Visualizar Pedigree" />
                        <InformationButton text="Visualizar Esterilizado" />
                        <InformationButton text="Visualizar Archivo PPP" />
                    </div>
                    <div className="flex flex-row">
                        <InformationButton text="Historial de Alergias" />
                        <InformationButton text="Historial de Vacunas" />
                        <InformationButton text="Historial de Enfermedades" />
                    </div>
                    <div className="flex flex-row align-center justify-center items-center bg-balanpy-800 rounded-xl p-4">
                        <img src="/dashboard/paw.svg" alt="huella" />
                        <span className="text-balanpy-50 p-2 font-bold text-xl">EDITAR INFORMACIÓN</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${container_style} col-span-1`} >
            <div className="flex flex-col align-between justify-between items-center m-3">
                <div className="flex flex-col align-center justify-center items-center p-2">
                    <img height="100" width="100" src="/dashboard/sunny.svg" alt="weather" />
                    <span className="text-black font-bold p-1 text-2xl">Soleado</span>
                </div>
                <span className="text-balanpy-800 font-bold text-6xl">24 ºC</span>
                <span className="text-black text-3xl">Sevilla</span>
                <span className="text-balanpy-800 text-2xl font-semibold">¡Tiempo perfecto para salir!</span>
            </div>
        </div>
        <div className={`${container_style} col-span-4`}>
            <h2 className="text-gray-400 font-semibold text-3xl p-1">Actividades recientes</h2>
            <ActivityRow icon={feed_activity} type="Comida" time="4:48:24 PM" info="400 gr" state={feed_state} />
            <ActivityRow icon={incomplete_activity} type="-" time="-" info="-" state={incomplete_state} />
            <ActivityRow icon={incomplete_activity} type="-" time="-" info="-" state={incomplete_state} />
        </div>
        <div className={`${container_style} col-span-1`}>
            <div className="flex flex-col text-center align-center justify-center items-center p-2">
                <h2 className="text-gray-400 font-semibold text-3xl p-1">Mascotas</h2>
                <Pet icon={dog_icon} type="Perros" count="1" />
                <Pet icon={cat_icon} type="Gatos" count="0" />
            </div>
        </div>
    </div>
}
