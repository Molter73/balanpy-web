import styles from "@/app/style";

export const Label = ({ htmlFor, text }) => {
    return(
        <label 
            className={`${styles.paragraph} font-normal text-zinc-700`}
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
}

export default Label;