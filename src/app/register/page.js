import React from "react";
import Image from "next/image";

export default function RegisterUser(){
    return(
        <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-b from-emerald-300 from-20% via-emerald-400 via-65% to-emerald-900 to-100%">
            <div className="flex justify-center items-center p-0 w-68 h-16">
                <Image 
                    src="/logo-white-image.png"
                    alt="Balanpy Logo"
                    width={60}
                    height={60}>
                </Image>
            </div>
            <div className="mt-1">
                <h2 className="font-poppins font-bold text-[30px] text-white text-center">
                    Completa el Registro
                </h2>
            </div>

            <div className="flex auto justify-center items-center p-6 mt-4 rounded-3xl w-3/5 h-3/5 bg-white">
                <div className="flex flex-wrap gap-2 pt-4 place-content-center">
                    <div className="w-48 h-14">
                        <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                            Nombre
                        </label>
                        <input
                            placeholder="Introduce tu nombre"
                            className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                            Apellido 1
                        </label>
                        <input
                            placeholder="Introduce tu primer apellido"
                            className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                         <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                            Apellido 2
                        </label>
                        <input
                            placeholder="Introduce tu segundo apellido"
                            className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                            Correo Electrónico
                        </label>
                        <input
                            placeholder="Introduce un correo electrónico"
                            className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                            Contraseña
                        </label>
                        <input
                            placeholder="Introduce una contraseña"
                            className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                            Repetir Contraseña
                        </label>
                        <input
                            placeholder="Repite de nuevo la contraseña"
                            className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 place-content-center">
                        <div className="w-72 h-14">
                            <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                                Domicilio
                            </label>
                            <input
                                placeholder="Introduce tu domicilio completo"
                                className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                        <div className="w-72 h-14">
                            <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                                Localidad
                            </label>
                            <input
                                placeholder="Introduce tu localidad"
                                className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 place-content-center">
                        <div className="w-48 h-14">
                            <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                                Provincia
                            </label>
                            <input
                                placeholder="Introduce tu provincia"
                                className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                        <div className="w-48 h-14">
                            <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700 ">
                                Estado
                            </label>
                            <input
                                placeholder="Introduce tu estado o país"
                                className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                        <div className="w-48 h-14">
                            <label className="p-1 text-[12px] font-poppins font-medium text-zinc-700">
                                Código Postal
                            </label>
                            <input
                                placeholder="Introduce tu código postal"
                                className="mt-0 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 place-content-center">
                        <div className="w-40 h-12 p-1">
                            <button type="submit" className="w-full mt-1 px-2 py-1 font-poppins font-semibold bg-transparent border-2 border-emerald-300 rounded-lg text-xs text-emerald-300 shadow-sm placeholder-slate-200
                                focus:outline-none hover:bg-emerald-300 hover:text-white">
                                Cancelar
                            </button>
                        </div>
                        <div className="w-40 h-12 p-1">
                            <button type="submit" className="w-full mt-1 px-2 py-1 font-poppins font-semibold bg-emerald-300 border-2 border-emerald-300 rounded-lg text-xs text-white shadow-sm hover:bg-white hover:text-emerald-300 focus:outline-none">
                                Regístrate
                            </button>
                        </div>
                     </div> 
                </div>
            </div>
        </main>
    );
}