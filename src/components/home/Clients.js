import styles from "@/app/style";
import { clients } from "@/constants";

export default function Clients() {
    return (
      <section
        id="clients"
        className={`text-center flex flex-col items-center pb-20 pt-20 `}
      >
        <h2
          className={`${styles.heading2} ${styles.paddingX} text-white mb-10`}
        >
          Nuestros Clientes
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-32 h-16 bg-white rounded-full shadow-md p-2 hover:shadow-2xl transition-all duration-300 ease-in-out hover:border-4 border-black box-border"
            >
              <img
                src={client.logo}
                alt={client.id}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
}