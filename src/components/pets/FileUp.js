export default function FileUp({text}) {
    return (
      <div className="flex items-center justify-center w-full py-1">
        <div className="flex-auto text-center">
          <div className="relative w-full mx-auto">
            <input id="file-upload" type="file" className="hidden" />
            <label
              htmlFor="file-upload"
              className="text-lg font-semibold block cursor-pointer w-full py-2 px-4 border-[3px] border-white rounded-lg bg-white text-balanpy-800 hover:bg-balanpy-800 hover:border-white hover:border-[3px] hover:text-white transition-all duration-300 ease-in-out "
            >
              {text}
            </label>
          </div>
          <label
            className="block text-white mb-4 text-sm font-medium mt-3"
            htmlFor="file-upload"
          >
            Sube el archivo en formato .pdf
          </label>
        </div>
      </div>
    );
  }
