export default function Container({styles, children}) {
    return (
        <div className={`flex flex-col bg-white align-center justify-between items-between border-2 border-balanpy-800 rounded-xl p-2 ${styles}`} >
            {children}
        </div>
    )
}
