import Steps from "@/components/pets/Steps";
import { ButtonPrimary } from "@/components/Button";
import styles from "../style";

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
        <Steps index="3" />
        <Steps index="4" styles={"bg-balanpy-800 text-white"} />
      </section>

      
      <section className={`${styles.paddingX} ${styles.flexCenter} mx-4 max-w-[1900px]`} >
        <div className={`${styles.boxWidthPets} px-10 pb-2 rounded-2xl w-full bg-white`}>
          <div className={`${styles.padding}`}>
              <p className={`${styles.heading1} text-center font-bold text-balanpy-800`}>¡Felicidades!</p>
          </div>
          <div className="flex justify-center">
            <p className={`${styles.heading4} text-center tracking-widest text-balanpy-800 w-2/4`}>
                Has dado el primer paso hacia un cuidado 
                más completo y amoroso para tu mascota registrándola en Balanpy. Estamos emocionados de acompañarte en esta aventura de 
                bienestar y felicidad para tu amigo de cuatro patas. ¡Bienvenido a la familia Balanpy!
            </p>            
          </div>
          <div className="flex justify-center m-10 gap-6 ">
            <ButtonPrimary styles={"text-[30px] bg-balanpy-800 border-balanpy-800"} text={"Vuelve al Panel de Control"} href="/dashboard"/>
          </div>
        </div>
      </section>
    </main>
  );
  
}