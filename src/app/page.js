import Image from "next/image";

export default function Login() {
  return (
    <main className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-b from-emerald-300 from-20% via-emerald-400 via-65% to-emerald-900 to-100%">
      <div className="flex flex-row p-10 rounded-3xl w-3/5 h-3/5 bg-white">
        <div className="flex-none border-r-2 p-5 content-center border-neutral-100">
          <Image 
            src="/login-image.png"
            alt="Puppy login"
            width={256}
            height={256}
            className="object-cover"
          />
        </div> 
        <div className="flex-auto items-center justify-center p-8 w-60 h-68">
          <div className="flex p-1.5 justify-center">
            <Image
              src="/logo-color-image.png"
              alt="Logo Balanpy"
              width={50}
              height={50}
            />
          </div>
          <form>
            <label className="text-xs text-zinc-700 font-medium">
              Username
            </label>
           <input
              placeholder="Enter your username"
              className="mt-1 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
              focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200"
           />
           <label className="text-xs text-zinc-700 font-medium">
              Password
            </label>
           <input
              placeholder="Enter your password"
              className="mt-1 block w-full px-2 py-1 font-poppins font-light bg-transparent border border-slate-200 rounded-lg text-[11px] text-slate-400 shadow-sm placeholder-slate-200
              focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200"
           />
           <button type="submit" className="w-full mt-4 px-2 py-1 font-poppins font-light bg-emerald-300 rounded-lg text-[14px] text-zinc-50 border-2 border-emerald-300 hover:bg-white hover:text-emerald-300 focus:outline-none">Login</button>
          </form>

          <p className="text-center p-2 text-sm text-zinc-700 font-medium">
            Aún no te has registrado?
          </p>

          <button type="submit" className="w-full mt-1 px-2 py-1 font-poppins font-light bg-transparent border-2 border-emerald-300 rounded-lg text-[14px] text-emerald-300 shadow-sm placeholder-slate-200
              focus:outline-none hover:bg-emerald-300 hover:text-white">
            Regístrate ahora
          </button>
        </div>
      </div>
    </main>
  );
}
