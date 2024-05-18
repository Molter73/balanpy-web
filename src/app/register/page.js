import { RowPets } from "@/constants/const-Pets";
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
        <Button1 index="1" />
        <Button2 index="2" />
        <Button2 index="3" />
        <Button2 index="4" />
      </section>
      
      <section className="flex justify-center max-w-screen-xl">
        <div className="p-12 mx-auto rounded-2xl w-full bg-white">
          <div className="flex justify-center">
            
            <div className="border-balanpy-800 border-4 rounded-2xl w-auto h-auto mx-auto">
              <div className="text-center w-40 h-40 mx-auto my-8 border-balanpy-800 border-4 rounded-full">
                <button className="text-balanpy-900 text-9xl">+</button>
              </div>
              <p className="text-balanpy-900 font-bold text-2xl text-center m-4">Sube la imagen de tu mascota</p>
              <p className="text-balanpy-800 font-bold text-center m-8">La imagen debe estar en formato .jpg o .png</p>
            </div>
            
            <div className="border-balanpy-800 border-4 rounded-2xl w-full mx-8 p-4">
              <div className="grid grid-cols-3 place-items-center gap-10 m-auto">
                <Input text="Nombre de tu mascota" placeholder="Nombre"></Input>
                <Input text="Raza de tu mascota" placeholder="Raza"></Input>
                <Input text="Fecha de nacimiento" placeholder="Fecha"></Input>
                  
              </div>
              <div className="grid grid-cols-4 justify-items-center m-auto ">
                <Input text="Sexo" placeholder="Sexo"></Input>
                <Input text="Color" placeholder="Color"></Input>
                <Input text="¿Esta esterilizad@?" placeholder="Si/No"></Input>
                <Input text="Nº Chip de la mascota" placeholder="Chip"></Input>
              </div>

              <div className="grid grid-cols-3 justify-items-center gap-10 m-auto">
                {RowPets.slice(0,3).map((rowP) => (
                  <div key={rowP.id} className="text-black">
                    <LabelPets text={rowP.labelText} htmlFor={rowP.id} />
                    {[...Array(4)].map((_, index) => (
                      <InputRow 
                        key={`${rowP.id}-input-${index}`} 
                        id={`${rowP.id}-input-${index}`} 
                        placeholder={rowP.placeholder}
                      />
                    ))}
                  </div>
                  ))
                } 
              </div>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <ButtonSecondary styles={"mx-10"} text={"Cancelar"} href="" />
            <ButtonPrimary styles={"mx-10"} text={"Continuar"} href="/register2" />
          </div>
        </div>
      </section>
    </main>
  );
  
}