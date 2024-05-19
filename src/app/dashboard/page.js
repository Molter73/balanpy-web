import ActivityButton from "@/components/dashboard/activity-button"
import InformationButton from "@/components/dashboard/information-button"
import Pet from "@/components/dashboard/pet"
import PetInfo from "@/components/dashboard/pet-info"
import Container from "@/components/dashboard/container"
import WeatherInfo from "@/components/dashboard/weather-info"
import Activities from "@/components/dashboard/activities"

import {
    dog_icon,
    cat_icon
} from "@/constants/dashboard"

export default function Page() {
    return <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-2">
        <Container styles="col-span-4">
            <div className="grid gap-4 grid-cols-4 grid-rows-1">
                <PetInfo />
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
        </Container>
        <Container styles="col-span-1">
            <WeatherInfo />
        </Container>
        <Container styles="col-span-4">
            <Activities />
        </Container>
        <Container styles="col-span-1">
            <div className="flex flex-col text-center align-center justify-center items-center p-2">
                <h2 className="text-gray-400 font-semibold text-3xl p-1">Mascotas</h2>
                <Pet icon={dog_icon} type="Perros" count="1" />
                <Pet icon={cat_icon} type="Gatos" count="0" />
            </div>
        </Container>
    </div>
}
