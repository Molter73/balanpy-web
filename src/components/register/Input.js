export const InputPrimary = ({ id, placeholder }) => {
    return(
            <input
                id={id}
                className=" mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                focus:outline-none focus:border-balanpy focus:ring-1 focus:ring-slate-200"
                placeholder={placeholder}
            />
    );
}

export const InputSecondary = ({ id, placeholder }) =>{
    return(
            <input
                id={id}
                className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                focus:outline-none focus:border-balanpy focus:ring-1 focus:ring-slate-200"
                placeholder={placeholder}
            />
    );
}