import React from "react";
import Image from "next/image";
import { InputPrimary, InputSecondary } from "@/components/register/Input";
import { ButtonPrimary, ButtonSecondary } from "@/components/register/Button";
import { Label } from "@/components/register/Label";
import { fieldsFormPrimary, fieldsFormSecundary } from "@/constants/form";

export default function RegisterUser(){
    return(
        <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-balanpy via-balanpy-800 to-balanpy-900">
            <div className="flex justify-center items-center p-0 w-68 h-16">
                <Image 
                    src="/logo-white-image.png"
                    alt="Balanpy Logo"
                    width={60}
                    height={60}
                />
            </div>
            <div className="mt-1">
                <h2 className="font-poppins font-bold text-[30px] text-white text-center">
                    Completa el Registro
                </h2>
            </div>
            
            <div className="flex flex-col justify-center items-center p-6 mt-4 rounded-3xl w-3/5 bg-white gap-4">
                <div className="flex flex-row justify-between w-full">
                    {fieldsFormPrimary.slice(0, 3).map((field) => (
                        <div key={field.id} className="flex flex-col w-1/3 px-2">
                            <Label text={field.labelText} htmlFor={field.id} />
                            <InputPrimary id={field.id} placeholder={field.placeholder} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-between w-full">
                    {fieldsFormPrimary.slice(3, 6).map((field) => (
                        <div key={field.id} className="flex flex-col w-1/3 px-2">
                            <Label text={field.labelText} htmlFor={field.id} />
                            <InputPrimary id={field.id} placeholder={field.placeholder} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-between w-full">
                    {fieldsFormSecundary.slice(0, 2).map((field) => (
                        <div key={field.id} className="flex flex-col w-1/2 px-2">
                            <Label text={field.labelText} htmlFor={field.id} />
                            <InputSecondary id={field.id} placeholder={field.placeholder} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-between w-full">
                    {fieldsFormPrimary.slice(2, 5).map((field) => (
                        <div key={field.id} className="flex flex-col w-1/3 px-2">
                            <Label text={field.labelText} htmlFor={field.id} />
                            <InputSecondary id={field.id} placeholder={field.placeholder} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-center gap-3 w-full mt-2">
                    <ButtonSecondary
                        text={"Cancelar"}
                        href="/"
                        
                    />
                    <ButtonPrimary
                        text={"Regístrate"}
                        href="/dashboard"
                    />
                </div>

            </div>
        </main>
    );
}