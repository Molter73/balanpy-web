import styles from "@/app/style";
import { footerLinks, socialMedia } from "@/constants";

export default function Footer() {
    return (
      <section className={`${styles.flexCenter} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              src="home/logo-balanpy-white.png"
              alt="Logo Blanco"
              className="w-[300px] h-[75px] object-contain mb-5"
            />
            <p className={`${styles.paragraph} mt-4 max-w-[300px] text-white`}>
              Gracias por elegir Balanpy para el cuidado de tus mascotas.
              Estamos aquí para hacer tu experiencia y la de tu amigo de cuatro
              patas más fácil y alegre. ¡Nos vemos pronto!
            </p>
          </div>
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-5 mt-10">
            {footerLinks.map((footerLinks) => (
              <div
                key={footerLinks.title}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className={`${styles.heading4} text-white`}>
                  {footerLinks.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLinks.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`${
                        styles.paragraph
                      } text-dimWhite cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
                        index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-10 border-t-[2px] border-t-white">
          <p className={`${styles.paragraph} text-white`}>
            2024 Balanpy. Todos los derechos reservados.
          </p>
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.name}
                className={`w-[40px] h-[40px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
