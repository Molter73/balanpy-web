import Input from "@/components/register/Input"
import { Label } from "@/components/register/Label";
import Steps from "@/components/pets/Steps";
import {fieldsFormPetsWalk} from "@/constants/form";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import styles from "../style";
import Container from "@/components/container";
import FileUp from "@/components/pets/FileUp";
import Check from "@/components/pets/check";
import Graph from "@/components/pets/Graph";

export default function Home() {
  return (
    <main className="justify-items-center grid grid-cols-1 py-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
      <div className="justify-center">
        <div className="flex justify-center w-auto p-1">
          <img
            src="pets/LogoBalanpyBlanco.png"
            alt="Balanpy Logo"
            width={120}
            height={120}
          ></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className={`${styles.heading2} text-white text-center`}>
            Registra a tu mascota
          </h1>
        </div>
      </div>

      <section className="flex justify-center items-center m-10 grid-cols-4 gap-40 bg-white rounded-full max-w-screen-md h-[3px]">
        <Steps index="1" />
        <Steps index="2" />
        <Steps index="3" styles={"bg-balanpy-800 text-white"} />
        <Steps index="4" />
      </section>

      <section className={`${styles.paddingX} ${styles.flexCenter} m-5`}>
        <div
          className={`${styles.boxWidthPets} p-10 rounded-[50px] w-full bg-white`}
        >
          <h3
            className={`${styles.heading3} text-center mb-10 text-balanpy-800`}
          >
            Unos pasos más y terminamos
          </h3>
          <div className="flex justify-center">
            <Container styles={"mr-4 p-6"}>
              <div className="flex justify-center">
                <p className="text-balanpy-800 text-center font-semibold text-[30px]">
                  Paseos
                </p>
              </div>
              <div className="flex flex-row text-nowrap">
                {fieldsFormPetsWalk.slice(0, 2).map((field) => (
                  <div key={field.id} className="flex-col gap-1 px-4 py-4">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row text-nowrap w-full items-center">
                {fieldsFormPetsWalk.slice(2, 4).map((field) => (
                  <div key={field.id} className="flex-col px-4 w-full">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="m-4 w-full">
                <p className="text-center mb-4">Nivel de energia de tu mascota</p>
                <Graph />
              </div>
              <div className="flex flex-row text-nowrap">
                <Check />
                <p className="content-center mx-2">
                  ¿Quieres que te notifiquemos cuando le toque su paseo?
                </p>
              </div>
            </Container>

            <Container styles={"mr-4 p-6"} bg_color="bg-balanpy-800">
              <div className="flex justify-center mb-6">
                <p className="text-white text-center font-semibold text-[30px]">
                  Sube los siguientes archivos
                </p>
              </div>
              <FileUp text={"DNI Mascota"}></FileUp>
              <FileUp text={"Archivo Esterilizacion"}></FileUp>
              <FileUp text={"Archivo Pedigree"}></FileUp>
              <FileUp text={"Archivo PPP"}></FileUp>
            </Container>
          </div>
          <div className="flex justify-center mt-8 gap-6 ">
            <ButtonSecondary
              styles={"text-[20px]"}
              text={"Cancelar"}
              href="/addPetStep2"
            />
            <ButtonPrimary
              styles={"text-[20px]"}
              text={"Continuar"}
              href="/addPetStepFinal"
            />
          </div>
        </div>
      </section>
    </main>
  );

}
