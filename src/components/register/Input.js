export const Input = ({ id, placeholder }) => {
    return(
            <input
                id={id}
                className="block w-full px-2 py-2 font-poppins font-normal bg-transparent border border-slate-200 rounded-lg text-[14px] text-balanpy-900 shadow-sm placeholder-gray mt-1
                focus:outline-none focus:border-balanpy focus:ring-1 focus:ring-slate-200"
                placeholder={placeholder}
            />
    );
}

export default Input;