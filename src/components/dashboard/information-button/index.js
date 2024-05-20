export default function InformationButton({text}) {
    return (
      <div className="flex align-center justify-center items-center border rounded-xl border-balanpy-800 bg-balanpy-50 mr-3 last:mr-0  h-14 w-32 p-2 hover:bg-balanpy-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300">
        <span className="font-poppins font-regular text-balanpy-800 leading-5 text-[14px] cursor-pointer hover:text-white">
          {text}
        </span>
      </div>
    );
}
