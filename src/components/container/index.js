export default function Container({styles, children, bg_color = 'bg-white'}) {
    return (
        <div className={`flex flex-col align-center justify-between items-between border-[3px] border-balanpy-800 rounded-[25px] ${styles} ${bg_color}`} >
            {children}
        </div>
    )
}
