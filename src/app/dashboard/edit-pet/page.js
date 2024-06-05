import React from "react";
import Input from "@/components/register/Input";
import { Label } from "@/components/register/Label";
import Image from "next/image";
import { fieldsFormPets, fieldsFormPetsRow } from "@/constants/form";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import Container from "@/components/container";
import styles from "../../style";

export default function EditPet(){
    return(
        <main className="justify-items-center grid grid-cols-1 p-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
            <div className="justify-center">
                <div className="flex justify-center w-auto p-1">
                    <Image
                        src="/logo-white-image.png"
                        alt="Balanpy Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex justify-center p-4">
                    <h1 className={`${styles.heading3} text-white text-center`}>
                        Edita la Información de tu Mascota
                    </h1>
                </div>
            </div>

            <section className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} p-10 mx-auto rounded-2xl w-full mt-4 bg-white`}>
                    <div className="flex justify-center">
                        <Container styles={"mr-10"}>
                            <div className="text-center justify-center mx-auto mt-20 w-40 h-40 border-balanpy-800 border-4 rounded-full">
                                <button className="text-balanpy-900 text-[100px] justify-center items-center">+</button>
                            </div>
                            <p className="text-balanpy-900 font-semibold text-[24px] m-4 text-center">
                                Sube la imagen de tu mascota
                            </p>
                            <p className="text-balanpy-800 font-light m-8 text-[16px] text-center">
                                La imagen debe estar en formato .jpg o .png
                            </p>
                        </Container>
                        <Container>
                            <div className="flex flex-row">
                               {fieldsFormPets.slice(0, 3).map((field) => (
                                    <div key={field.id} className="flex flex-col w-full px-2 py-4">
                                        <Label text={field.labelText} htmlFor={field.id} />
                                        <Input id={field.id} placeholder={field.placeholder} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-row">
                                {fieldsFormPets.slice(3, 7).map((field) => (
                                    <div key={field.id} className="flex flex-col w-full px-2 py-2">
                                        <Label text={field.labelText} htmlFor={field.id} />
                                        <Input id={field.id} placeholder={field.placeholder} />
                                    </div>
                                ))}
                            </div>

                            <div className="flex-1 w-full p-2 flex flex-row justify-between gap-6 md:mt-5 mt-10">
                                {fieldsFormPetsRow.map((row, i) => (
                                    <div key={row.title + i} className="flex flex-col ss:my-0 my-4">
                                        <h4 className={`${styles.paragraph} font-poppins font-normal text-zinc-700`}>
                                            {row.title}
                                        </h4>
                                        <ul className="list-none mt-4">
                                        {Array(4)
                                            .fill(0)
                                            .map((_, index) => (
                                            <div className="mb-4" key={row.title + i + "-" + index}>
                                                <Input id={row.title + i + "-" + index} placeholder={row.text}/>
                                            </div>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </div>
                    <div className="flex justify-center mt-8 gap-6 ">
                        <ButtonSecondary styles={"text-[16px]"} text={"Cancelar"} href="/dashboard" />
                        <ButtonPrimary text={"Continuar"} href="/dashboard/your-pets" styles={"text-[16px]"}/>
                    </div>
                </div>
            </section>
        </main>
    )
}
