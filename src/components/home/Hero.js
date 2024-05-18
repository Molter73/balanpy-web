import { styles } from "../../app/style";
import { ButtonPrimary, ButtonSecondary } from "./Button";

export default function Hero() {
    return (
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} `}
      >
        <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center `y-[6px] px-4 mb-2">
            <h3 className={styles.heading4}>Bienvenido a</h3>
          </div>
          <div className="flex flex-row items-center `y-[2px] px-4">
            <h1 className={styles.heading1}>Balanpy</h1>
          </div>
          <div className="flex flex-row items-center `y-[2px] px-4 mt-6">
            <p className={`${styles.paragraph} max-w-[500px]`}>
              ¡Bienvenido a Balanpy! La plataforma que transforma el cuidado de
              tus mascotas en una experiencia interactiva y visual. Aquí
              encontrarás herramientas fáciles de usar para el seguimiento de su
              salud y bienestar.
              <br />
              <br /> Únete a Balanpy y haz que cuidar a tus mascotas sea más
              eficiente y divertido. ¡Empieza a disfrutar de un mundo de cuidado
              innovador para tus amigos de cuatro patas!
            </p>
          </div>
          <div className="mt-5">
            <ButtonPrimary
              styles={"ml-4"}
              text={"¡Regístrate ahora!"}
              href="/register"
            />
            <ButtonSecondary
              styles={"ml-5"}
              text={"Contáctanos"}
              href="/contact"
            />
          </div>
        </div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src="home/bulldog.png"
            alt="bulldog"
            className="w-[460px] h-[460px] relative z-[5] mr-20"
          />
        </div>
      </section>
    );
}
