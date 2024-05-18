import Check from "@/components/pets/check";
import Input from "@/components/pets/input";
import Button1 from "@/components/pets/button";
import { Button2 } from "@/components/pets/button";
import { LabelPets } from "@/constants/const-labelPets";
import { InputRow } from "@/components/pets/inputRow";
import { ButtonPrimary, ButtonSecondary } from "@/components/home/Button";
export default function Home() {
  return (
  //BLOQUE PRINCIPAL DE COMPONENTES Y COLOR DE FONDO
    <main className="justify-items-center grid grid-cols-1 p-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
      
      <div className="justify-center">
        <div className="flex justify-center w-auto p-1">
          <img src="pets/LogoBalanpyBlanco.png" alt="Balanpy Logo" width={60} height={60}></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className="font-poppins font-bold text-7xl text-white text-center">Registra a tu mascota</h1>
        </div>
      </div>
      
      <section className="flex justify-center items-center mx-auto my-20 grid-cols-4 gap-40 bg-white rounded-full max-w-screen-md h-4">
        <Button2 index="1" href="/register" />
        <Button1 index="2" href="/register2" />
        <Button2 index="3" />
        <Button2 index="4" />
      </section>
      
      <section className="flex justify-center max-w-screen-xl">
        <div className="p-12 mx-auto rounded-2xl w-full bg-white">
          <div className="m-auto">
            <p className="text-balanpy-800 font-poppins font-bold text-5xl text-center">Rellena el siguiente cuestionario</p>
          </div>
          
          <div className="justify-center my-12 grid grid-cols-2 gap-8">
            <div className="border-balanpy-800 border-4 rounded-2xl mx-auto">
              <p className="text-balanpy-800 font-poppins text-4xl text-center m-4">Comida</p>
              <div className="grid grid-cols-3 place-items-center mx-auto p-12">
                <Input text="¿Cuantas veces come tu mascota?" placeholder="Introduce un valor"></Input>
                <Input text="¿Que cantidad come cada vez?" placeholder="Introduce un valor"></Input>
                <Input text="¿Cuanto pesa tu mascota?" placeholder="Introduce un valor"></Input> 
                <Input text="1ª Comida" placeholder="Introduce un valor"></Input>
                <Input text="2ª Comida" placeholder="Introduce un valor"></Input>
                <Input text="3ª Comida" placeholder="Introduce un valor"></Input>
              </div>
              <div className="relative h-28">
                <div className="absolute bottom-0 left-8 p-4">
                  <p className="text-2xl text-center font-poppins mx-2">¿Quieres que te notifiquemos cuando le toque su comida?</p>
                  <Check />
                </div>
              </div>
            </div>
            
            <div className="border-balanpy-800 border-4 rounded-2xl m-auto">
              <p className="text-balanpy-800 font-poppins text-4xl text-center m-4">Higiene</p>
              <div className="grid grid-cols-3 place-items-center mx-auto p-8">
                <Input text="¿Cada cuanto bañas a tu mascota?" placeholder="Nombre"></Input>
                <Input text="¿Cada cuanto la cepillas?" placeholder="Raza"></Input>
                <Input text="¿Cada cuanto la desparacitas?" placeholder="Fecha"></Input>
                <Input text="Fecha del ultimo baño de tu mascota" placeholder="Introduce un valor"></Input>
                <Input text="Fecha del ultimo cepillado" placeholder="Introduce un valor"></Input>
                <Input text="Fecha de la ultima desparacitacion" placeholder="Introduce un valor"></Input> 
              </div> 
              <div className="relative h-28">
                <div className="absolute bottom-0 left-8 p-4">
                  <p className="text-2xl text-center font-poppins mx-2">¿Quieres que te notifiquemos cuando le toque cualquier elemento de la higiene de tu mascota?</p>
                  <Check />

                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <ButtonSecondary styles={"mx-10"} text={"Cancelar"} href="" />
            <ButtonPrimary styles={"mx-10"} text={"Continuar"} href="" />
          </div>

        </div>
      </section>
    </main>
  );
  
}