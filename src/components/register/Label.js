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
            className={`${styles.simpleText}font-medium text-black`}
            htmlFor={htmlFor}
        >
            {text}
        </label>
    )
}

export const LabelTertiary = ({text, value}) => {

    return(
        <label className={`${styles.simpleText}font-medium text-black`}>
            {text} {value}
        </label>

    )
}
