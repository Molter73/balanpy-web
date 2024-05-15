import styles from "@/app/style";
import { services } from "@/constants";

export default function Clients() {
  return (
    <section className={`text-center flex flex-col items-center pb-20 `}>
      <h2 className={`${styles.heading2} ${styles.paddingX} text-black mb-6`}>
        Servicios
      </h2>
      <div className="w-1/12 h-[5px] bg-black mb-6"></div>
      <p
        className={`${styles.paragraph} ${styles.paddingX} text-black mb-10 max-w-[800px]`}
      >
        Balanpy ofrece una supervisión integral de tu mascota, incluyendo
        seguimiento de cuidados, gestión de alimentación, recordatorios de
        vacunas y citas con veterinarios asociados. Todo en un solo lugar para
        mantener a tu amigo de cuatro patas feliz y saludable.
      </p>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {services.map((services) => (
          <div
            key={services.id}
            className="bg-balanpy text-white p-6 pt-10 pb-10 rounded-lg shadow-lg w-full md:w-1/4 lg:w-1/4 hover:shadow-2xl hover:scale-105 hover:bg-[#0D6C5F] transition-all duration-300 ease-in-out"
          >
            <img
              src={services.icon}
              alt={services.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className={`${styles.heading4} text-white mb-2`}>
              {services.title}
            </h4>
            <p>{services.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
