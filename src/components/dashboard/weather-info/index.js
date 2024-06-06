export default function WeatherInfo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-full p-4 py-12">
      <div className="flex flex-col items-center">
        <img
          height="150"
          width="150"
          src="/dashboard/sunny.svg"
          alt="weather"
        />
        <span className="text-black font-semibold text-2xl mt-6">
          Soleado
        </span>
      </div>
      <span className="text-balanpy-800 font-bold text-[64px] leading-10">
        24 ºC
      </span>
      <span className="font-medium text-black text-[20px]">
        Sevilla
      </span>
      <span className="font-semibold text-balanpy-800 text-[28px] text-center">
        ¡Tiempo perfecto para salir!
      </span>
    </div>
  );
}
