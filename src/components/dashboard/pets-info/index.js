import { LabelTertiary } from "@/components/register/Label";
import Image from "next/image";
import Container from "@/components/container";
import { ButtonSecondary } from "@/components/Button";
import ActivityButton from "../activity-button";
import { feedActivity, cleanActivity, brushActivity, walkActivity } from "@/constants/modal"
import InformationButton from "@/components/dashboard/information-button";

export default function YourPets({pet}){
    return (
      <Container styles="grid grid-cols-2 justify-center p-4">
        <div className="grid grid-cols-5  items-center justify-center border-r-2 p-4 border-gray-200">
          <div className="w-full mr-2 col-span-2">
            <Image
              src={pet.image.src}
              alt={pet.image.alt}
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="w-full items-center px-6 col-span-3">
            <div className="flex flex-col gap-3">
              <LabelTertiary
                text="Nombre:"
                htmlFor="name-pet"
                value={pet.nombre}
              />
              <LabelTertiary
                text="Raza:"
                htmlFor="breed-pet"
                value={pet.raza}
              />
              <LabelTertiary
                text="Nacimiento:"
                htmlFor="birth-pet"
                value={pet.nacimiento}
              />
              <LabelTertiary
                text="Sexo:"
                htmlFor="gender-pet"
                value={pet.sexo}
              />
              <LabelTertiary
                text="Color:"
                htmlFor="color-pet"
                value={pet.color}
              />
              <LabelTertiary
                text="Esterilizado:"
                htmlFor="sterilised-pet"
                value={pet.esterilizado}
              />
              <LabelTertiary
                text="N Chip:"
                htmlFor="chip-pet"
                value={pet.chip}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full ">
          <div className="grid grid-rows-2 justify-center">
            <div className="grid grid-cols-4 justify-items-center w-full text-center">
              <div className="justify-center items-center">
                <ActivityButton
                  text="Añadir Comida"
                  image="/dashboard/mascotas.svg"
                  hoverImage="/dashboard/mascotas-white.svg"
                  alt_text="añadir comida"
                  modalData={feedActivity}
                />
              </div>
              <div className="justify-center items-center">
                <ActivityButton
                  text="Añadir Baño"
                  image="/dashboard/bano.svg"
                  hoverImage="/dashboard/bano-white.svg"
                  alt_text="añadir baño"
                  modalData={cleanActivity}
                />
              </div>
              <div className="justify-center items-center">
                <ActivityButton
                  text="Añadir Cepillado"
                  image="/dashboard/cepillo.svg"
                  hoverImage="/dashboard/cepillo-white.svg"
                  alt_text="añadir cepillado"
                  modalData={brushActivity}
                />
              </div>
              <div className="justify-center items-center">
                <ActivityButton
                  text="Añadir Paseo"
                  image="/dashboard/paseo.svg"
                  hoverImage="/dashboard/paseo-white.svg"
                  alt_text="añadir paseo"
                  modalData={walkActivity}
                />
              </div>
            </div>
            <div className="grid grid-rows-2 justify-center mt-4">
                <div className="grid grid-cols-4 justify-items-center text-center">
                <InformationButton text="Visualizar DNI Mascota" />
                <InformationButton text="Visualizar Pedigree" />
                <InformationButton text="Visualizar Esterilizado" />
                <InformationButton text="Visualizar Archivo PPP" />
                </div>
                <div className="grid grid-cols-3 justify-items-center text-center">
                <InformationButton text="Historial de Alergias" />
                <InformationButton text="Historial de Vacunas" />
                <InformationButton text="Historial de Enfermedades" />
                </div>
            </div>
          </div>
        </div>
      </Container>
    );
}
