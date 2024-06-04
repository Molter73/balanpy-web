import { LabelTertiary } from "@/components/register/Label";
import Image from "next/image";
import Container from "@/components/container";
import { ButtonSecondary } from "@/components/Button";
import ActivityButton from "../activity-button";
import { feedActivity, cleanActivity, brushActivity, walkActivity } from "@/constants/modal"

export default function YourPets({pet}){
    return(
        <Container styles="grid grid-cols-2 justify-center p-4">
            <div className="flex items-center justify-center border-r-2 p-4 border-gray-200">
                <div className="w-1/3 mr-2">
                    <Image
                        src={pet.image.src}
                        alt={pet.image.alt}
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                </div>
                <div className="w-2/3 items-center justify-center p-2">
                    <div className="flex flex-col p-2">
                        <LabelTertiary text='Nombre:' htmlFor='name-pet' value={pet.nombre}/>
                        <LabelTertiary text='Raza:' htmlFor='breed-pet' value={pet.raza}/>
                        <LabelTertiary text='Fecha de Nacimiento:' htmlFor='birth-pet' value={pet.nacimiento}/>
                        <LabelTertiary text='Sexo:' htmlFor='gender-pet' value={pet.sexo}/>
                        <LabelTertiary text='Color:' htmlFor='color-pet' value={pet.color}/>
                        <LabelTertiary text='Esterilizado:' htmlFor='sterilised-pet' value={pet.esterilizado}/>
                        <LabelTertiary text='N Chip:' htmlFor='chip-pet'value={pet.chip}/>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="grid grid-rows-2 w-full">
                    <div className="flex w-full justify-center items-center">
                        <ButtonSecondary
                            text={"Editar información"}
                            href="/dashboard/edit-pet"
                            styles={"w-full mt:10 mb:10"}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-items-center w-full">
                        <div className="justify-center items-center w-1/4">
                            <ActivityButton
                                text="Añadir Comida"
                                image="/dashboard/mascotas.svg"
                                hoverImage="/dashboard/mascotas-white.svg"
                                alt_text="añadir comida"
                                modalData={feedActivity}
                            />
                        </div>
                        <div className="justify-center items-center w-1/4">
                            <ActivityButton
                                text="Añadir Baño"
                                image="/dashboard/bano.svg"
                                hoverImage="/dashboard/bano-white.svg"
                                alt_text="añadir baño"
                                modalData={cleanActivity}
                            />
                        </div>
                        <div className="justify-center items-center w-1/4">
                            <ActivityButton
                                text="Añadir Cepillado"
                                image="/dashboard/cepillo.svg"
                                hoverImage="/dashboard/cepillo-white.svg"
                                alt_text="añadir cepillado"
                                modalData={brushActivity}
                            />
                        </div>
                        <div className="justify-center items-center w-1/4">
                            <ActivityButton
                                text="Añadir Paseo"
                                image="/dashboard/paseo.svg"
                                hoverImage="/dashboard/paseo-white.svg"
                                alt_text="añadir paseo"
                                modalData={walkActivity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}
