import Input from "@/components/register/Input"
import Label from "@/components/register/Label";
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
    //BLOQUE PRINCIPAL DE COMPONENTES Y COLOR DE FONDO
    <main className="justify-items-center grid grid-cols-1 p-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
      <div className="justify-center">
        <div className="flex justify-center w-auto p-1">
          <img src="pets/LogoBalanpyBlanco.png" alt="Balanpy Logo" width={120} height={120}></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className={`${styles.heading2} text-white text-center `}>
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

      
      <section className={`${styles.flexCenter} my-4 max-w-[1900px]`}>
        
        <div className={`${styles.boxWidthPets} px-10 pb-10 rounded-2xl w-full bg-white`}>
          <div className={`${styles.padding} ${styles.flexCenter}`}>
              <p className={`${styles.heading3} text-center font-bold`}>Unos pasos más y terminamos</p>
          </div>
          
          <div className="flex justify-center">
            <Container styles={"ml-auto mr-4"}>
              <div className="flex">
                <p className={`${styles.heading3} text-balanpy-800 text-center m-6`}>Paseos</p>
              </div>
              <div className="flex flex-row text-nowrap">
                {fieldsFormPetsWalk.slice(0, 3).map((field) => (
                  <div key={field.id} className="flex-col gap-1 px-4 py-4">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="m-4">
                <p className="text-center">Nivel de energia de tu mascota</p>
                <Graph/>
              </div>
              <div className="flex flex-row text-nowrap">
                <Check/>
                <p className="content-center mx-2">¿Quieres que te notifiquemos cuando le toque su paseo?</p>
              </div>    
            </Container>

            <Container styles={"bg-balanpy-800 mr-auto ml-4"}>
              <div className="flex">
                <p className={`${styles.heading3} text-white text-center m-6 text-nowrap`}>Sube los siguientes archivos</p>
              </div>
              <FileUp text={"DNI Mascota"}></FileUp>
              <FileUp text={"Archivo Esterilizacion"}></FileUp>
              <FileUp text={"Archivo Pedigree"}></FileUp>
              <FileUp text={"Archivo PPP"}></FileUp>
            </Container>
          </div>
          <div className="flex justify-center mt-8 gap-6 ">
            <ButtonSecondary styles={"text-[16px]"} text={"Cancelar"} href="/addPetStep2" />
            <ButtonPrimary styles={"text-[16px]"} text={"Continuar"} href="/addPetStepFinal"/>
          </div>
        </div>
      </section>
    </main>
  );
  
}