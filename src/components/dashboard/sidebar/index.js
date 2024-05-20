import {navigation} from "@/constants/dashboard"

import NavigationItem from "./navigation-item"

export default function Sidebar({children}) {
    return (
      <div>
        <div className="fixed flex h-screen w-full max-w-[20rem] flex-col bg-white bg-clip-border justify-around align-center items-center shadow-lg">
          <div className="flex flex-col p-4 mb-2 items-center">
            <img src="/balanpy.svg" className="w-[110px] h-[110px]" />
            <h5 className="block text-balanpy text-[36px] font-bold font-poppins">
              Balanpy
            </h5>
            <div className="w-full h-[2px] bg-dimGray mt-4"></div>
          </div>
          <nav
            aria-label="Sidebar"
            className="flex min-w-[240px] flex-col gap-6 p-2 text-balanpy-700 text-[20px] font-medium"
          >
            {navigation.map((item, i) => {
              return (
                <NavigationItem
                  key={i}
                  href={item.href}
                  text={item.text}
                  image={item.image}
                />
              );
            })}
          </nav>
          <div className="border-[3px] rounded-[40px] border-balanpy-800 p-4 flex flex-col max-w-[15rem] items-center text-center text-black">
            <img
              src="/dashboard/diamond.svg"
              alt="Accede a premium"
              className="bg-balanpy-200 rounded-full p-3"
            />
            <h5 className="block text-[30px] font-semibold leading-8 mt-4">
              Accede a premium
            </h5>
            <h6 className="block font-poppins text-[14px] font-normal leading-1 mt-5 mb-5">
              Obtén ahora todas las características de Balanpy como registro de
              mascotas ilimitadas o descuentos en tu veterinario.
            </h6>
          </div>
        </div>
        <div className="sm:ml-[20rem]">{children}</div>
      </div>
    );
}
