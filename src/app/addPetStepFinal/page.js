import Steps from "@/components/pets/Steps";
import { ButtonPrimary } from "@/components/Button";
import styles from "../style";

export default function Home() {
  return (
    <main className="justify-items-center grid grid-cols-1 p-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
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

      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="py-16 mx-auto rounded-[50px] w-4/5 bg-white">
          <div className={`${styles.padding}`}>
            <p
              className={`${styles.heading1} text-center font-bold text-balanpy-800`}
            >
              ¡Felicidades!
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <p
              className={`text-center  text-balanpy-800 w-2/3 text-[24px] font-medium leading-10`}
            >
              Has dado el primer paso hacia un cuidado más completo y amoroso
              para tu mascota registrándola en Balanpy. Estamos emocionados de
              acompañarte en esta aventura de bienestar y felicidad para tu
              amigo de cuatro patas. ¡Bienvenido a la familia Balanpy!
            </p>
          </div>
          <div className="flex justify-center m-10 gap-6 ">
            <a href="/dashboard">
              <button className="py-4 px-10 font-poppins font-medium text-[24px] rounded-[10px] outline-none border-4 border-balanpy-800 box-border transition-all duration-300 ease-in-out text-primary bg-balanpy-800 hover:bg-white hover:text-balanpy-800">
                Vuelve al Panel de Control
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
  
}