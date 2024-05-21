export default function WeatherInfo() {
  return (
    <div className="flex flex-col items-center justify-between h-full p-4 py-12">
      <div className="flex flex-col items-center">
        <img
          height="120"
          width="120"
          src="/dashboard/sunny.svg"
          alt="weather"
        />
        <span className="text-black font-semibold text-xl mt-6">
          Soleado
        </span>
      </div>
      <span className="text-balanpy-800 font-medium text-[50px] leading-10">
        24 ºC
      </span>
      <span className="font-regular text-black text-[20px]">
        Sevilla
      </span>
      <span className="font-medium text-balanpy-800 text-[20px] text-center">
        ¡Tiempo perfecto para salir!
      </span>
    </div>
  );
}
