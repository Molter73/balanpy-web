import styles from "@/app/style";
import { stats } from "@/constants";

export default function Stats() {
    return (
      <section
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-4`}
      >
        {stats.map((stats) => (
          <div key={stats.id} className="flex-1 flex justify-start items-center flex-row m-3">
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-balanpy'>{stats.value}</h4>
            <p className="font-poppins font-bold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-balanpy uppercase ml-3">{stats.title}</p>
          </div>
        ))}
      </section>
    );
}