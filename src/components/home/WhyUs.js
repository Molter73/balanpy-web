import styles from "@/app/style";
import { features } from "@/constants";

export default function Clients() {
  return (
    <section id="whyus" className={`flex flex-col items-center pb-20 text-center`}>
      <h2
        className={`${styles.heading2} ${styles.paddingX} text-balanpy mb-10`}
      >
        ¿Por qué elegirnos?
      </h2>
      <div className="w-1/12 h-[5px] bg-balanpy"></div>
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mt-16">
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="home/carlino.png"
            alt="Carlino"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {features.map((features) => (
            <div
              key={features.id}
              className="bg-balanpy text-white p-6 rounded-lg shadow-md flex items-center hover:shadow-2xl hover:scale-105 hover:bg-balanpy-900 transition-all duration-300 ease-in-out"
            >
              <img
                src={features.icon}
                alt={features.title}
                className="w-12 h-12 mr-4 bg-white rounded-full p-2"
              />
              <p className={`${styles.paragraph} text-white text-left`}>
                {features.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
