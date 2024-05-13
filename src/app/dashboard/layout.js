export default function DashboardLayout() {
    return <div className="relative flex h-screen w-full max-w-[20rem] flex-col bg-white bg-clip-border justify-center align-center items-center">
        <div className="flex flex-col p-4 mb-2 items-center">
            <img className="" src="/balanpy.svg" />
            <h5 className="block text-balanpy-800 text-xl font-bold">Balanpy</h5>
        </div>
        <nav aria-label="Sidebar" className="flex min-w-[240px] flex-col gap-1 p-2 text-balanpy-700">
            <a href="#tus-mascotas" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold">
                <img src="/dashboard/dashboard.svg" className="pr-1" />
                Dashboard
            </a>
            <a href="#tus-mascotas" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold">
                <img src="/dashboard/mascotas.svg" className="pr-1" />
                Tus Mascotas
            </a>
            <a href="#veterinarios" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold">
                <img src="/dashboard/veterinarios.svg" className="pr-1" />
                Veterinarios
            </a>
            <a href="#tus-citas" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold">
                <img src="/dashboard/tus-citas.svg" className="pr-1" />
                Tus Citas
            </a>
            <a href="#tus-citas" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold">
                <img src="/dashboard/ajustes.svg" className="pr-1" />
                Ajustes
            </a>
        </nav>
        <div className="border-2 rounded-3xl border-balanpy-700 p-2 flex flex-col max-w-[15rem] items-center text-center text-black">
            <img src="/dashboard/diamond.svg" alt="Accede a premium" className="bg-balanpy-200 rounded-full p-3" />
            <h5 className="block text-xl font-semibold">Accede a premium</h5>
            Obtén ahora todas las características de Balanpy como registro de mascotas ilimitadas o descuentos en tu veterinario.
        </div>
    </div>
}
