export default function Check() {
    return (
            <label className="inline-flex items-center cursor-pointer m-2">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="relative w-16 h-8 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-balanpy-600 dark:peer-focus:ring-balanpy-900 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-balanpy-800"></div>
            </label>
    );
  }