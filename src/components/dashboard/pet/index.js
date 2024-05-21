export default function Pet({ icon, text, cantidad }) {
    return (
        <div className="flex align-center justify-center items-center">
            <div className="flex align-center items-center justify-center rounded-full size-14 p-2 bg-balanpy-800">
                <img src={icon.src} alt={icon.alt} width="30" height="30" />
            </div>
            <div className="flex flex-col align-center text-left p-4">
                <span className="text-black text-xl font-semibold">{text}</span>
                <span className="text-black text-lg">{cantidad}</span>
            </div>
        </div>
    );
}