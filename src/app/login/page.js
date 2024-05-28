import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { Label } from "@/components/register/Label";
import Input from "@/components/register/Input";
import { fieldsFormLogin } from "@/constants/form";

export default function Login() {
  return (
    <main className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-b from-balanpy-400 via-balanpy-700 to-balanpy-900">
      <div className="flex flex-row p-10 rounded-[40px] w-[1080px] h-[550px] bg-white">
        <div className="flex-none border-r-2 p-5 content-center border-primary w-1/2">
          <Image
            src="/login/login-image.png"
            alt="Puppy login"
            width={456}
            height={456}
            className="object-cover"
          />
        </div>
        <div className="flex-auto h-full items-center justify-center p-4 px-10 w-60">
          <div className="flex p-1.5 justify-center mb-4">
            <Image
              src="/home/logo-balanpy.png"
              alt="Logo Balanpy"
              width={300}
              height={300}
            />
          </div>
          <form>
            {fieldsFormLogin.slice(0, 2).map((field) => (
              <div key={field.id} className="flex flex-col w-full px-2 py-2">
                <Label text={field.labelText} htmlFor={field.id} />
                <Input id={field.id} placeholder={field.placeholder} />
              </div>
            ))}

            <ButtonPrimary
              text={"Login"}
              href="/dashboard"
              styles={"w-full mt-5 mb-5"}
            />
          </form>

          <p className="text-center p-2 text-sm text-zinc-700 font-medium">
            Aún no te has registrado?
          </p>

          <ButtonSecondary
            text={"Regístrate ahora"}
            href="/register"
            styles={"w-full"}
          />
        </div>
      </div>
    </main>
  );
}
