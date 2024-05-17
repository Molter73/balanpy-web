import styles from "@/app/style"
import FeedbackCard from "@/components/home/FeedbackCard"
import { feedback } from "@/constants";

export default function Testimonials() {
    return (
      <section
        id="testimonials"
        className={`flex flex-col items-center pb-10 text-center`}
      >
        <h2
          className={`${styles.heading2} ${styles.paddingX} text-black mb-10`}
        >
          ¿Qué dicen de nosotros?
        </h2>
        <div className="w-1/12 h-[5px] bg-black mb-10"></div>
        <div className="flex flex-wrap justify-center w-full">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    );
}