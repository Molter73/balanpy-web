import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
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

      <div
        className={`bg-balanpy-gradient ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={styles.boxWidth}>
          <Stats />
        </div>
      </div>
    </div>
  );
}
