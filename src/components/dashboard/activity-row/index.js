export default function ActivityRow({icon, type, time, info, state}) {
    return (
      <div className="grid gap-2 grid-cols-5 grid-rows-1 p-2 align-center justify-around items-center text-center">
        <div
          className={`flex align-center items-center justify-center rounded-full size-16 p-2 ${icon.background}`}
        >
          <img src={icon.src} alt={icon.alt} width="30" height="30" />
        </div>
        <span className="text-balanpy-600 text-[24px]">{type}</span>
        <span className="text-balanpy-600 text-[18px]">{time}</span>
        <span className="text-balanpy-600 text-[24px]">{info}</span>
        <div
          className={`flex align-center items-center justify-center rounded-2xl p-2 ${state.background}`}
        >
          <span className="font-poppins text-white text-xl font-regulars">
            {state.text}
          </span>
        </div>
      </div>
    );
}
