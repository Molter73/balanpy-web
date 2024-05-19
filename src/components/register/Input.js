export const Input = ({ id, placeholder }) => {
    return(
            <input
                id={id}
                className=" mt-0 block w-full px-2 py-1 font-poppins font-normal bg-transparent border border-slate-200 rounded-lg text-[14px] text-balanpy-900 shadow-sm placeholder-gray
                focus:outline-none focus:border-balanpy focus:ring-1 focus:ring-slate-200"
                placeholder={placeholder}
            />
    );
}

export default Input;