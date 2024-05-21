export default function ActivityButton({text, image, alt_text}) {
    return (
      <div className="flex flex-col items-center justify-center align-center p-4">
        <img
          src={image}
          alt={alt_text}
          height="64"
          width="64"
          className="border rounded-xl border-balanpy-800 bg-balanpy-50 p-3 h-[64px] w-[64px] mb-2 cursor-pointer hover:bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300"
        />
        <span className="text-black font-regular text-[14px]">
          {text}
        </span>
      </div>
    );
}
