import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
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

    </div>
  );
}
