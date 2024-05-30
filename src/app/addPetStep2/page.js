import Check from "@/components/pets/check";
import Input from "@/components/register/Input"
import Label from "@/components/register/Label";
import Steps from "@/components/pets/Steps";
import { fieldsFormPetsEat, fieldsFormPetsHig } from "@/constants/form";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import styles from "../style";
import Container from "@/components/container";

export default function Home() {
  return (
    //BLOQUE PRINCIPAL DE COMPONENTES Y COLOR DE FONDO
    <main className="justify-items-center grid grid-cols-1 p-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
      <div className="justify-center">
        <div className="flex justify-center w-auto p-1">
          <img src="pets/LogoBalanpyBlanco.png" alt="Balanpy Logo" width={120} height={120}></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className={`${styles.heading2} text-white text-center`}>
            Registra a tu mascota
          </h1>
        </div>
      </div>

      <section className="flex justify-center items-center m-10 grid-cols-4 gap-40 bg-white rounded-full max-w-screen-md h-[3px]">
        <Steps index="1" />
        <Steps index="2" styles={"bg-balanpy-800 text-white"} />
        <Steps index="3" />
        <Steps index="4" />
      </section>

      <section className={`${styles.paddingX} ${styles.flexCenter} m-5`} >
        <div className={`${styles.boxWidthPets} p-10 mx-auto rounded-2xl w-full bg-white`}>
          <div className="flex justify-center">
            
            <Container styles={"mr-10"}>
              <div className="text-center">
                <p className={`${styles.heading3} text-balanpy-800 text-center m-6`}>Comida</p>
              </div>
              <div className="flex flex-row text-nowrap">
                {fieldsFormPetsEat.slice(0, 3).map((field) => (
                  <div key={field.id} className="flex flex-col w-full px-4 py-4">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row text-nowrap ">
                {fieldsFormPetsEat.slice(3, 6).map((field) => (
                  <div key={field.id} className="flex flex-col w-full px-2 py-4">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row text-nowrap">
                <Check></Check>
                <p className="content-center mx-2">¿Quieres que te notifiquemos cuando le toque su comida?</p>
              </div>       
            </Container>

            <Container>
              <div>
                <p className={`${styles.heading3} text-balanpy-800 text-center m-6`}>Higiene</p>
              </div>
              <div className="flex flex-row text-nowrap">
                {fieldsFormPetsHig.slice(0, 3).map((field) => (
                  <div key={field.id} className="flex flex-col w-full px-4 py-8">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row text-nowrap">
                {fieldsFormPetsHig.slice(3, 6).map((field) => (
                  <div key={field.id} className="flex flex-col w-full px-4 py-8">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row text-nowrap">
                <Check></Check>
                <p className="content-center mx-2">¿Quieres que te notifiquemos cuando le toque cualquier elemento de la higiene de tu mascota?</p>
              </div>
              
            </Container>
          </div>
          <div className="flex justify-center mt-8 gap-6 ">
            <ButtonSecondary styles={"text-[16px]"} text={"Cancelar"} href="/addPetStep1" />
            <ButtonPrimary styles={"text-[16px]"} text={"Continuar"} href="/addPetStep3"/>
          </div>
        </div>
      </section>
    </main>
  );
  
}