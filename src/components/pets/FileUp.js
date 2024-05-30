export default function FileUp({text}) {
    return (
        <div className="flex items-center justify-center">
            <div className="flex-auto text-center">
                <div className="relative w-4/5 mx-auto">
                    <input id="file-upload" type="file" className="hidden"/>
                    <label for="file-upload" className="text-2xl font-semibold block cursor-pointer w-full py-1 px-4 border border-balanpy-700 rounded-lg bg-white text-balanpy-800 hover:bg-balanpy-700 hover:border-white">
                        {text}
                    </label>
                </div>
                <label className="block text-white mb-4 text-sm font-medium" for="file-upload">
                    Sube el archivo en formato .pdf
                </label>
            </div>
        </div>
    );
  }