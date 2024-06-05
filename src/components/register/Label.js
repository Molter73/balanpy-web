import styles from "@/app/style";

export const Label = ({ htmlFor, text }) => {
    return(
        <label
            className={`${styles.paragraph} font-normal text-zinc-700`}
            htmlFor={htmlFor}
        >
            {text}
        </label>
    )
}

export const LabelSecondary = ({ htmlFor, text }) => {
    return(
        <label
            className={`${styles.simpleText}`}
            htmlFor={htmlFor}
        >
            {text}
        </label>
    )
}

export const LabelTertiary = ({ text, value }) => {
  return (
    <label className="flex justify-between">
      <span className="text-balanpy-800 font-semibold text-[16px]">{text}</span>
      <span className="text-gray-600 text-[16px] ml-2">{value}</span>
    </label>
  );
};

