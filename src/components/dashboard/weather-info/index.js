export default function WeatherInfo() {
    return (
        <div className="flex flex-col align-between justify-between items-center m-3">
            <div className="flex flex-col align-center justify-center items-center p-2">
                <img height="100" width="100" src="/dashboard/sunny.svg" alt="weather" />
                <span className="text-black font-bold p-1 text-2xl">Soleado</span>
            </div>
            <span className="text-balanpy-800 font-bold text-6xl">24 ºC</span>
            <span className="text-black text-3xl">Sevilla</span>
            <span className="text-balanpy-800 text-2xl font-semibold">¡Tiempo perfecto para salir!</span>
        </div>
    )
}
