import Link from "next/link";

export const ButtonPrimary = ({text, href, styles }) => {
  return (
      <Link href={href}>
        <button
          type="button"
          className={`py-2 px-4 font-poppins font-semibold text-[14px] text-primary bg-balanpy rounded-[6px] outline-none border-2 border-balanpy box-border hover:bg-white hover:text-balanpy transition-all duration-300 ease-in-out ${styles}`}
        >
          {text}
        </button>
    </Link>
  );
};

export const ButtonSecondary = ({text, href, styles }) => {
  return (
      <Link href={href}>
        <button
          type="button"
          className={`py-2 px-4 font-poppins font-semibold text-[14px] text-balanpy bg-white rounded-[6px] outline-none border-2 border-balanpy box-border hover:bg-balanpy hover:text-primary transition-all duration-300 ease-in-out ${styles}`}
          >
          {text}
        </button>
    </Link>
  );
};

