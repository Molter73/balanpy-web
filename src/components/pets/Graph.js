export default function Graph() {
  return (
    <div className="relative mb-6 text-center">
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        id="labels-range-input"
        type="range"
        min="0"
        max="10"
        step="1"
        className="w-full h-1 bg-balanpy-500 rounded-lg appearance-none cursor-pointer dark:bg-balanpy-800"
      />
      <div className="flex justify-between w-full absolute -bottom-6">
        <span className="text-sm text-gray-500 dark:text-gray-400">Nada</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Normal</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Muy Activo
        </span>
      </div>
      <div className="absolute top-1.5 left-0.1 w-full flex justify-between">
        {[...Array(11)].map((_, index) => (
          <div key={index} className="h-4 w-1 bg-balanpy-800"></div>
        ))}
      </div>
    </div>
  );
}
