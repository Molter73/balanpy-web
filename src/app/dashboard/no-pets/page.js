import Pet from "@/components/dashboard/pet"
import Container from "@/components/dashboard/container"
import WeatherInfo from "@/components/dashboard/weather-info"
import ActivityList from "@/components/dashboard/activities";
import DashboardLayout from "@/components/dashboard/layout"
import {
  pets,
  noPetsActivitiesData,
} from "@/constants/dashboard";
import { ButtonPrimary } from "@/components/Button";


export default function Dashboard() {
    return (
      <DashboardLayout className="h-full bg-balanpy-50">
        <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-2">
          <Container styles="col-span-4 items-center justify-center px-24 py-10">
            <img
              src="/dashboard/usuario.png"
              alt="Perfil de Usuario"
              className="w-[200px] h-[200px]"
            />
            <h2 className="font-medium text-[40px] text-center text-balanpy-800 mb-4 leading-10">
              ¡Registra a tu primera Mascota!
            </h2>
            <span className="font-medium text-[22px] text-balanpy-800 text-center">
              Registra a tu primer amigo peludo en Balanpy y empieza a disfrutar
              de un manejo más fácil y efectivo de su bienestar. ¡Dale a tu
              mascota el amor y la atención que merece hoy mismo!
            </span>
            <ButtonPrimary
              styles={"mt-10 text-[18px]"}
              text={"Registra tu primera mascota"}
              href="/login"
            />
          </Container>
          <Container styles="col-span-1">
            <WeatherInfo />
          </Container>
          <Container styles="col-span-4 p-8">
            <ActivityList activities={noPetsActivitiesData} />
          </Container>
          <Container styles="col-span-1 h-full">
            <div className="flex flex-col text-center align-top justify-center items-start p-2 h-full">
              <h2 className="text-gray-400 font-semibold text-2xl text-center p-1 w-full mb-4">
                Mascotas
              </h2>
              {pets.map((pet, index) => (
                <Pet
                  key={index}
                  icon={pet.icon}
                  text={pet.text}
                  cantidad={pet.cantidad}
                />
              ))}
              <div className="flex flex-row w-full align-middle justify-center items-center bg-balanpy-800 rounded-full py-2 px-3 mt-10 cursor-pointer hover:bg-balanpy-900 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300 ">
                <img
                  src="/dashboard/paw.svg"
                  alt="huella"
                  className="w-[18px] h-[18px] mr-2"
                />
                <span className="text-balanpy-50 py-1 font-bold text-md">
                  Añadir Mascota
                </span>
              </div>
            </div>
          </Container>
        </div>
      </DashboardLayout>
    );
}
