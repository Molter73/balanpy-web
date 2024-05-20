export default function SearchBar() {
  return (
    <div className="flex">
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img
            src="/dashboard/pet-paw.svg"
            alt="Buscar Mascota"
            className="w-6 h-6"
          />
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block font-poppins w-full p-2 pl-10 text-md text-center font-semibold text-dimGray border-[3px] border-gray-300 rounded-full bg-balanpy-50"
          placeholder="CAMBIAR MASCOTA"
        />
      </div>
    </div>
  );
}
