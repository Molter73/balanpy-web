import Container from "@/components/dashboard/container";
import DashboardLayout from "@/components/dashboard/layout";
import { ButtonPrimary } from "@/components/Button";
import "../styles.css";

export default function Dashboard() {
  return (
    <DashboardLayout className="h-full bg-balanpy-50">
      <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5 grid-rows-1">
        <Container styles="col-span-5 items-center justify-center px-[80px] py-14">
          <img
            src="/dashboard/usuario.png"
            alt="Perfil de Usuario"
            className="w-[200px] h-[200px]"
          />
          <h2 className="font-medium text-[40px] text-center text-balanpy-800 mb-4 leading-10">
            ¡Aún no tienes ninguna cita agendada!
          </h2>
          <span className="font-medium text-[22px] text-balanpy-800 text-center">
            No dejes pasar más tiempo para el bienestar de tu mascota. <br/>
            Agendar una cita con el veterinario es rápido y fácil.<br/>
            <br/>Escoge el mejor momento, asegura el cuidado que tu amigo
            merece y mantén su salud al día. ¡Hazlo ahora y disfruta de la
            tranquilidad de saber que tu mascota está en las mejores manos!
          </span>
          <ButtonPrimary
            styles={"mt-10 text-[24px]"}
            text={"Agenda tu primera cita"}
            href="/login"
          />
        </Container>
      </div>
    </DashboardLayout>
  );
}
