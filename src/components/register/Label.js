export const Label = ({ htmlFor, text }) => {
    return(
        <label 
            className="p-1 text-[11px] font-poppins font-medium text-zinc-700" 
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
}
