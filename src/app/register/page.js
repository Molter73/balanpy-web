import React from "react";
import Image from "next/image";
import Input from "@/components/register/Input";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { Label } from "@/components/register/Label";
import { fieldsFormPrimary, fieldsFormSecundary } from "@/constants/form";
import styles from "../style";

export default function RegisterUser(){
    return (
      <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-balanpy via-balanpy-800 to-balanpy-900">
        <div className="flex justify-center items-center mb-5">
          <Image
            src="/logo-white-image.png"
            alt="Balanpy Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="mt-1">
          <h2
            className={`${styles.heading3} font-bold text-[30px] text-white text-center mb-5`}
          >
            Completa el Registro
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center p-6 mt-4 rounded-3xl w-4/5 bg-white gap-8">
          <div className="flex flex-row justify-between w-full">
            {fieldsFormPrimary.slice(0, 3).map((field) => (
              <div key={field.id} className="flex flex-col w-1/3 px-2 py-6">
                <Label text={field.labelText} htmlFor={field.id} />
                <Input id={field.id} placeholder={field.placeholder} />
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between w-full">
            {fieldsFormPrimary.slice(3, 6).map((field) => (
              <div key={field.id} className="flex flex-col w-1/3 px-2">
                <Label text={field.labelText} htmlFor={field.id} />
                <Input id={field.id} placeholder={field.placeholder} />
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between w-full">
            {fieldsFormSecundary.slice(0, 2).map((field) => (
              <div key={field.id} className="flex flex-col w-1/2 px-2">
                <Label text={field.labelText} htmlFor={field.id} />
                <Input id={field.id} placeholder={field.placeholder} />
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between w-full">
            {fieldsFormPrimary.slice(6, 9).map((field) => (
              <div key={field.id} className="flex flex-col w-1/3 px-2">
                <Label text={field.labelText} htmlFor={field.id} />
                <Input id={field.id} placeholder={field.placeholder} />
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center gap-3 w-full mt-2">
            <ButtonSecondary text={"Cancelar"} href="/" styles={"text-[16px]"}/>
            <ButtonPrimary text={"Regístrate"} href="/dashboard" styles={"text-[16px]"}/>
          </div>
        </div>
      </main>
    );
}
