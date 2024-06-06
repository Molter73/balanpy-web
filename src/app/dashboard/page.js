import ActivityButton from "@/components/dashboard/activity-button"
import InformationButton from "@/components/dashboard/information-button"
import Pet from "@/components/dashboard/pet"
import PetInfo from "@/components/dashboard/pet-info"
import Container from "@/components/container"
import WeatherInfo from "@/components/dashboard/weather-info"
import ActivityList from "@/components/dashboard/activities";
import DashboardLayout from "@/components/dashboard/layout"
import { ButtonPrimary } from "@/components/Button"
import { feedActivity, cleanActivity, brushActivity, walkActivity } from "@/constants/modal"

import { getApiUrl } from "@/config"
import Link from "next/link"

const apiUrl = getApiUrl()

async function getApiData(endpoint, defaultValue) {
  const res = await fetch(`${apiUrl}/${endpoint}`, { cache: "no-store" })
  if (!res.ok) {
    return defaultValue
  }
  return res.json()
}

async function getPet() {
  return getApiData("pet.json", undefined)
}

async function getPets() {
  return getApiData("pets.json", [])
}

async function getActivities() {
  return getApiData("activities.json", [])
}

function noPet() {
  return (
    <div className="flex flex-col col-span-4 items-center justify-center px-24">
      <img
        src="/dashboard/usuario.png"
        alt="Perfil de Usuario"
        className="w-[200px] h-[200px]"
      />
      <h2 className="font-bold text-[40px] text-center text-balanpy-800 mb-4 leading-10">
        ¡Registra a tu primera Mascota!
      </h2>
      <span className="font-medium text-[22px] text-balanpy-800 text-center w-2/3">
        Registra a tu primer amigo peludo en Balanpy y empieza a disfrutar
        de un manejo más fácil y efectivo de su bienestar. ¡Dale a tu
        mascota el amor y la atención que merece hoy mismo!
      </span>
      <ButtonPrimary
        styles={"mt-10 text-[18px]"}
        text={"Registra tu primera mascota"}
        href="/addPetStep1"
      />
    </div>
  )
}

function generatePet(pet) {
  if (!Object.hasOwn(pet, 'image') || !Object.hasOwn(pet, 'status')) {
    console.log('Campo necesario faltante', pet)
    return noPet()
  }

  return (
    <>
      <PetInfo image={pet.image} status={pet.status} />
      <div className="flex flex-col text-center justify-center items-center col-span-3 h-full">
        <span className=" text-balanpy-800 font-bold text-[24px] mb-2">
          ¿Qué quieres hacer ahora?
        </span>
        <div className="flex flex-row justify-center items-center">
          <ActivityButton
            text="Añadir Comida"
            image="/dashboard/mascotas.svg"
            hoverImage="/dashboard/mascotas-white.svg"
            alt_text="añadir comida"
            modalData={feedActivity}
          />
          <ActivityButton
            text="Añadir Baño"
            image="/dashboard/bano.svg"
            hoverImage="/dashboard/bano-white.svg"
            alt_text="añadir baño"
            modalData={cleanActivity}
          />
          <ActivityButton
            text="Añadir Cepillado"
            image="/dashboard/cepillo.svg"
            hoverImage="/dashboard/cepillo-white.svg"
            alt_text="añadir cepillado"
            modalData={brushActivity}
          />
          <ActivityButton
            text="Añadir Paseo"
            image="/dashboard/paseo.svg"
            hoverImage="/dashboard/paseo-white.svg"
            alt_text="añadir paseo"
            modalData={walkActivity}
          />
        </div>
        <span className="text-balanpy-800 font-bold text-[24px] mb-2 mt-6">
          ¿Qué información necesitas?
        </span>
        <div className="flex flex-row justify-center items-center p-2">
          <InformationButton text="Visualizar DNI Mascota" />
          <InformationButton text="Visualizar Pedigree" />
          <InformationButton text="Visualizar Esterilizado" />
          <InformationButton text="Visualizar Archivo PPP" />
        </div>
        <div className="flex flex-row justify-center items-center mt-1">
          <InformationButton text="Historial de Alergias" />
          <InformationButton text="Historial de Vacunas" />
          <InformationButton text="Historial de Enfermedades" />
        </div>
        <div className="flex flex-row align-center justify-center items-center bg-balanpy-800 rounded-full py-2 px-12 mt-10 cursor-pointer hover:bg-balanpy-900 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300 ">
          <img src="/dashboard/paw.svg" alt="huella" />
          <a href="/dashboard/edit-pet">
            <span className="text-balanpy-50 p-1 font-bold text-xl ml-4">
              EDITAR INFORMACIÓN
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default async function Dashboard() {
  let petPromise = getPet()
  let petsPromise = getPets()
  let activitiesPromise = getActivities()

  let responses
  let pet
  let pets
  let activities
  try {
    let responses = await Promise.all([
      petPromise,
      petsPromise,
      activitiesPromise
    ])

    pet = responses[0]
    pets = responses[1]
    activities = responses[2]
  } catch (e) {
    console.log(e)

    pet = undefined
    pets = []
    activities = []
  }

  let petComponent
  if (pet === undefined) {
    petComponent = noPet()
  } else {
    petComponent = generatePet(pet)
  }

  return (
    <DashboardLayout className="h-full bg-balanpy-50">
      <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-2">
        <Container styles="col-span-4">
          <div className="grid gap-2 grid-cols-4 grid-rows-1 justify-center items-center h-full p-10">
            {petComponent}
          </div>
        </Container>
        <Container styles="col-span-1">
          <WeatherInfo />
        </Container>
        <Container styles="col-span-4 p-8">
          <ActivityList activities={activities} />
        </Container>
        <Container styles="col-span-1 h-full px-6 py-6">
          <div className="flex flex-col text-center align-middle justify-center items-start p-2 h-full">
            <h2 className="text-gray-400 font-semibold text-2xl text-center w-full mb-4">
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
            <Link href="/dashboard/edit-pet" className="no-underline w-full">
              <div className="flex flex-row w-full align-center justify-center items-center bg-balanpy-800 rounded-full py-2 px-6 mt-10 cursor-pointer hover:bg-balanpy-900 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300">
                <img src="/dashboard/paw.svg" alt="huella" />
                <span className="text-balanpy-50 p-1 font-bold text-[15px] ml-4 py-2">
                  Editar Mascotas
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </div>
    </DashboardLayout>
  );
}
