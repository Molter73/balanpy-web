import ActivityButton from "@/components/dashboard/activity-button"
import InformationButton from "@/components/dashboard/information-button"
import Pet from "@/components/dashboard/pet"
import PetInfo from "@/components/dashboard/pet-info"
import Container from "@/components/dashboard/container"
import WeatherInfo from "@/components/dashboard/weather-info"
import Activities from "@/components/dashboard/activities"
import DashboardLayout from "@/components/dashboard/layout"
import { pets } from "@/constants/dashboard"

export default function Dashboard() {
    return (
      <DashboardLayout className="h-full bg-balanpy-50">
        <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-2">
          <Container styles="col-span-4">
            <div className="grid gap-2 p-4 grid-cols-4 grid-rows-1">
              <PetInfo />
              <div className="flex flex-col text-center align-center justify-center items-center col-span-3">
                <span className="text-xl text-balanpy-800 font-bold text-[24px] mb-2">
                  ¿Qué quieres hacer?
                </span>
                <div className="flex flex-row">
                  <ActivityButton
                    text="Añadir Comida"
                    image="/dashboard/mascotas.svg"
                    alt_text="añadir comida"
                  />
                  <ActivityButton
                    text="Añadir Baño"
                    image="/dashboard/bano.svg"
                    alt_text="añadir baño"
                  />
                  <ActivityButton
                    text="Añadir Cepillado"
                    image="/dashboard/cepillo.svg"
                    alt_text="añadir cepillado"
                  />
                  <ActivityButton
                    text="Añadir Paseo"
                    image="/dashboard/paseo.svg"
                    alt_text="añadir paseo"
                  />
                </div>
                <span className="text-xl text-balanpy-800 font-bold text-[24px] mb-2 mt-6">
                  ¿Qué información necesitas?
                </span>
                <div className="flex flex-row p-2">
                  <InformationButton text="Visualizar DNI Mascota" />
                  <InformationButton text="Visualizar Pedigree" />
                  <InformationButton text="Visualizar Esterilizado" />
                  <InformationButton text="Visualizar Archivo PPP" />
                </div>
                <div className="flex flex-row mt-1">
                  <InformationButton text="Historial de Alergias" />
                  <InformationButton text="Historial de Vacunas" />
                  <InformationButton text="Historial de Enfermedades" />
                </div>
                <div className="flex flex-row align-center justify-center items-center bg-balanpy-800 rounded-full py-2 px-12 mt-10 cursor-pointer hover:bg-balanpy-900 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300 ">
                  <img src="/dashboard/paw.svg" alt="huella" />
                  <span className="text-balanpy-50 p-1 font-bold text-xl ml-4">
                    EDITAR INFORMACIÓN
                  </span>
                </div>
              </div>
            </div>
          </Container>
          <Container styles="col-span-1">
            <WeatherInfo />
          </Container>
          <Container styles="col-span-4 p-8">
            <Activities />
          </Container>
          <Container styles="col-span-1 h-full">
            <div className="flex flex-col text-center align-top justify-center items-start p-2 h-full">
              <h2 className="text-gray-400 font-semibold text-2xl text-center p-1 w-full mb-4">
                Mascotas
              </h2>
              {pets.map((pet, index) => (
                <Pet
                  key={index}
                  icon={pet.src}
                  type={pet.alt}
                  count={pet.cantidad}
                />
              ))}
            </div>
          </Container>
        </div>
      </DashboardLayout>
    );
}
