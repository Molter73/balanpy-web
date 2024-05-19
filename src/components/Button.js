import Link from "next/link";

const Button = ({ styles, text, href }) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className={`py-2 px-4 font-poppins font-semibold rounded-[5px] outline-none border-4 border-balanpy box-border transition-all duration-300 ease-in-out ${styles}`}
      >
        {text}
      </button>
    </Link>
  );
}

export const ButtonPrimary = ({ styles, text, href }) => {
  return <Button text={text} href={href} styles={`${styles} text-primary bg-balanpy hover:bg-white hover:text-balanpy`} />

};

export const ButtonSecondary = ({ styles, text, href }) => {
  return <Button text={text} href={href} styles={`${styles} text-balanpy bg-white hover:bg-balanpy hover:text-primary`} />
};

ButtonSecondary.defaultProps = {
  styles: "text-[14px]",
};

ButtonPrimary.defaultProps = {
  styles: "text-[14px]",
};
;
