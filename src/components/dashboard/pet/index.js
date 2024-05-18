export default function Pet({icon, type, count}) {
    return (
        <div className="flex align-center justify-center items-center">
            <div className={`flex align-center items-center justify-center rounded-full size-16 p-2 bg-balanpy-800`}>
                <img src={icon.src} alt={icon.alt} width="30" height="30" />
            </div>
            <div className="flex flex-col align-center text-left p-4">
                <span className="text-black text-3xl font-bold">{type}</span>
                <span className="text-black">{count}</span>
            </div>
        </div>
    )
}
