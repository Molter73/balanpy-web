export default function Container({styles, children}) {
    return (
        <div className={`flex flex-col bg-white align-center justify-between items-between border-[3px] border-balanpy-800 rounded-[25px] p-2 ${styles}`} >
            {children}
        </div>
    )
}
