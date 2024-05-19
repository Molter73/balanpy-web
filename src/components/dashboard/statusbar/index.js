export default function StatusBar({name, perc, bg_color}) {
    return (
        <div className="p-2 w-full text-center">
            <span>{name}</span>
            <div className="w-full border border-black bg-white rounded-full h-5 overflow-hidden">
                <div className={`${bg_color} h-5 rounded-full`} style={{width: perc}}></div>
            </div>
        </div>
    )
}
