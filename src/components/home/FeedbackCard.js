import styles from "@/app/style";

export default function Testimonials({content, name, title, img }) {
    return (
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 last:mr-0 my-5 bg-balanpy hover:shadow-2xl hover:scale-105 hover:bg-balanpy-900 transition-all duration-300 ease-in-out">
        <img
          src="home/quotes.svg"
          alt="double_quotes"
          className="w-[60px] h-[60px] object-contain"
        />
        <p className="font-poppins font-normal text-[16px] leading-[28px] text-white my-10">
          {content}
        </p>
        <div className="flex flex-row">
          <img
            src={img}
            alt={name}
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className={`${styles.heading4} text-white`}>{name}</h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {title}
            </p>
          </div>
        </div>
      </div>
    );
}