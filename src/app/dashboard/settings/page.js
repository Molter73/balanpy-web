
import Container from "@/components/container"
import DashboardLayout from "@/components/dashboard/layout"
import Input from "@/components/register/Input";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { Label } from "@/components/register/Label";
import { fieldsFormPrimary, fieldsFormSecundary } from "@/constants/form";
export default function Dashboard() {
    return (
      <DashboardLayout className="h-full bg-balanpy-50">
        <div className="text-black p-6 bg-balanpy-50 grid gap-4 grid-cols-5">
          <Container styles="col-span-5 pb-20">
            <div className="flex flex-col justify-center items-center p-6 mt-4 rounded-3xl bg-white gap-8">
              <div className="flex flex-row justify-center w-full">
                {fieldsFormPrimary.slice(0, 3).map((field) => (
                  <div key={field.id} className="flex flex-col w-1/3 px-2 py-6">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-between w-full">
                {fieldsFormPrimary.slice(3, 6).map((field) => (
                  <div key={field.id} className="flex flex-col w-1/3 px-2">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-between w-full">
                {fieldsFormSecundary.slice(0, 2).map((field) => (
                  <div key={field.id} className="flex flex-col w-1/2 px-2">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-between w-full">
                {fieldsFormPrimary.slice(6, 9).map((field) => (
                  <div key={field.id} className="flex flex-col w-1/3 px-2">
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
            </div>
              <div className="flex flex-row justify-center gap-3 w-full mt-8">
                <ButtonSecondary text={"Cancelar"} href="/" styles={"text-[20px]"}/>
                <ButtonPrimary text={"Editar Información"} href="/dashboard" styles={"text-[20px]"}/>
              </div>
          </Container>
        </div>
      </DashboardLayout>
    );
}
