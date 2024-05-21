export default function Pet({ icon, type, count }) {
    return (
        <div className="flex align-center justify-center items-center">
            <div className={`flex align-center items-center justify-center rounded-full size-14 p-2 bg-balanpy-800`}>
                <img src={icon} alt={type} width="30" height="30" />
            </div>
            <div className="flex flex-col align-center text-left p-2">
                <span className="text-black text-xl font-semibold">{type}</span>
                <span className="text-black text-lg">{count}</span>
            </div>
        </div>
    );
}