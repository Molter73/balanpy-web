import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const ModalDateVet = ({ show, onClose }) => {
  const [date, setDate] = useState(new Date());

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="relative bg-white rounded-2xl py-16 w-[800px] mx-4 flex flex-col items-center justify-center border-[3px] border-balanpy-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-balanpy hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
        >
          Cerrar
        </button>
        <div className="mb-6 flex flex-col items-center">
          <img
            src="/balanpy.svg"
            alt="Logo Balanpy"
            className="w-[80px] h-[80px]"
          />
          <h5 className="text-balanpy text-[36px] font-bold">Balanpy</h5>
          <div className="w-1/3 h-[2px] bg-dimGray mt-2 mb-4"></div>
          <h2 className="text-2xl text-balanpy-800 font-semibold mt-2 text-center w-2/3">
            ¡Es hora de agendar una cita!
          </h2>
        </div>
        <div className="flex w-full px-10">
          <div className="flex flex-col w-1/2 pr-4">
            <div className="mb-4 items-center">
              <label className="block text-lg font-regular text-gray-700 text-center">
                Selecciona un veterinario
              </label>
              <input
                type="text"
                placeholder="Desplegable con los veterinarios"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
              />
            </div>
            <div className="mb-4 items-center">
              <label className="block text-lg font-regular text-gray-700 text-center">
                Selecciona una mascota
              </label>
              <input
                type="text"
                placeholder="Desplegable con las mascotas"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
              />
            </div>
            <div className="mb-4 items-center">
              <label className="block text-lg font-regular text-gray-700 text-center">
                Hora de la visita
              </label>
              <input
                type="text"
                placeholder="Desplegable con las horas disponibles."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-regular text-gray-700 text-center">
                Asunto de la visita
              </label>
              <textarea
                placeholder="Describe el asunto de la visita."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                onClick={onClose}
                className="text-primary bg-balanpy hover:bg-white hover:text-balanpy text-[18px] py-2 px-4 font-poppins font-medium rounded-[5px] outline-none border-4 border-balanpy box-border transition-all duration-300 ease-in-out"
              >
                Agendar la cita
              </button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <label className="block text-lg font-regular text-gray-700 text-center mb-2">
              Selecciona una fecha
            </label>
            <div className="rounded-md p-4">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full"
                tileClassName="p-2 text-center rounded-md hover:bg-gray-200"
                navigationLabel={({ date, label, locale, view }) => (
                  <span className="text-balanpy-800 font-semibold">
                    {label}
                  </span>
                )}
                nextLabel=">"
                prevLabel="<"
                formatShortWeekday={(locale, date) =>
                  new Intl.DateTimeFormat(locale, { weekday: "short" }).format(
                    date
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
