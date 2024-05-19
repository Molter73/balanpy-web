import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { Label } from "@/components/register/Label";
import Input from "@/components/register/Input";
import { fieldsFormLogin } from "@/constants/form";

export default function Login() {
  return (
    <main className="flex items-center justify-center p-8 min-h-screen bg-gradient-to-b from-balanpy via-balanpy-800 to-balanpy-900">
      <div className="flex flex-row p-10 rounded-3xl w-3/5 h-3/5 bg-white">
        <div className="flex-none border-r-2 p-5 content-center border-primary">
          <Image
            src="/login/login-image.png"
            alt="Puppy login"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
        <div className="flex-auto items-center justify-center p-8 w-60 h-68">
          <div className="flex p-1.5 justify-center mb-10">
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
