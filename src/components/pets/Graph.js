export default function Graph() {
    return (
        <div className="relative mb-6 text-center">
            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
            <input id="labels-range-input" type="range" min="0" max="10" step="1" className="w-4/5 h-1 bg-balanpy-500 rounded-lg appearance-none cursor-pointer dark:bg-balanpy-800"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-16 -bottom-6">Nada</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-72 -bottom-6">Poco</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Normal</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-72 -bottom-6">Activo</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-16 -bottom-6">Muy Activo</span>
        </div>
    );
}