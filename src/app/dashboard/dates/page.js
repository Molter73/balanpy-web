"use client"
import { useState } from "react";
import Container from "@/components/container";
import DashboardLayout from "@/components/dashboard/layout";
import { ModalDateVet } from "@/components/dashboard/modalDateVet";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <DashboardLayout className="h-full bg-balanpy-50">
      <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-1">
        <Container styles="bg-white col-span-5 items-center justify-center px-[80px] py-14">
          <img
            src="/dashboard/usuario.png"
            alt="Perfil de Usuario"
            className="w-[200px] h-[200px]"
          />
          <h2 className="font-medium text-[40px] text-center text-balanpy-800 mb-4 leading-10">
            ¡Aún no tienes ninguna cita agendada!
          </h2>
          <span className="font-medium text-[22px] text-balanpy-800 text-center">
            No dejes pasar más tiempo para el bienestar de tu mascota. <br />
            Agendar una cita con el veterinario es rápido y fácil.
            <br />
            <br />
            Escoge el mejor momento, asegura el cuidado que tu amigo merece y
            mantén su salud al día. ¡Hazlo ahora y disfruta de la tranquilidad
            de saber que tu mascota está en las mejores manos!
          </span>
          <div className="text-center mt-10">
            <button
              onClick={toggleModal}
              className="text-primary bg-balanpy hover:bg-white hover:text-balanpy text-[24px] py-2 px-4 font-poppins font-medium rounded-[5px] outline-none border-4 border-balanpy box-border transition-all duration-300 ease-in-out"
            >
              Agendar tu primera cita
            </button>
          </div>
        </Container>
      </div>
      <ModalDateVet show={showModal} onClose={toggleModal} />
    </DashboardLayout>
  );
}
