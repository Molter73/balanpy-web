export const LabelPets = ({ htmlFor, text }) => {
    return(
        <label className="p-5 text-xl text-zinc-700 font-medium" htmlFor={htmlFor}>
            {text}
        </label>
    );
}