import styles from "@/app/style";

export const Label = ({ htmlFor, text }) => {
    return(
        <label 
            className={`${styles.paragraph} font-poppins font-normal text-zinc-700`}
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
}
