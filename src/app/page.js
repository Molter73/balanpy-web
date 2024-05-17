import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";
import {styles} from "./style";
export default function Home() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-balanpy`}>
        <div className={styles.boxWidth}>
          <Topbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Stats />
        </div>
      </div>

      <div className={`bg-clients-gradient`}>
        <div className={styles.boxWidth}>
          <Clients />
        </div>
        <img src="home/curvas-fondo.png" className="w-full object-cover relative" />
      </div>

      <div
        className={`bg-white ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={styles.boxWidth}>
          <Services />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={styles.boxWidth}>
          <WhyUs />
        </div>
      </div>
      <div
        className={`bg-white ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={styles.boxWidth}>
          <Testimonials />
        </div>
      </div>
      <div
        className={`bg-[#0D6C5F] ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
      >
        <div className={styles.boxWidth}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
