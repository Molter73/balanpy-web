import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="relative bg-white rounded-2xl px-2 py-16 mx-4 flex flex-col items-center justify-center border-[3px] border-balanpy-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-balanpy hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
        >
          Cerrar
        </button>
        <div className="mb-6 flex flex-col items-center px-10">
          <img
            src="/balanpy.svg"
            alt="Logo Balanpy"
            className="w-[80px] h-[80px]"
          />
          <h5 className="text-balanpy text-[36px] font-bold">Balanpy</h5>
          <div className="w-1/3 h-[2px] bg-dimGray mt-4"></div>
          <h2 className="text-2xl text-balanpy-800 font-semibold mt-2 text-center w-2/3">
            ¡Es hora de darle de comer a tu mascota!
          </h2>
        </div>
        <div className="mb-4 items-center w-2/3">
          <label className="block text-lg font-regular text-gray-700 text-center">
            ¿Qué cantidad vas a darle de comer?
          </label>
          <input
            type="number"
            placeholder="Indica la cantidad en gramos"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
          />
        </div>
        <div className="mb-6 w-2/3">
          <label className="block text-lg font-regular text-gray-700 text-center">
            Observaciones
          </label>
          <textarea
            placeholder="Añade observaciones sobre la comida o el comportamiento de tu mascota"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-center"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={onClose}
            className="text-primary bg-balanpy hover:bg-white hover:text-balanpy text-[18px] py-2 px-4 font-poppins font-medium rounded-[5px] outline-none border-4 border-balanpy box-border transition-all duration-300 ease-in-out "
          >
            Dar comida
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;