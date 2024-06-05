"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Label } from "@/components/register/Label";
import Input from "@/components/register/Input";
import { fieldsFormLogin } from "@/constants/form";
import { ButtonSecondary } from "@/components/Button";

const HARDCODED_PASSWORD = "12345";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.password.value !== HARDCODED_PASSWORD) {
      setError("Contraseña incorrecta. Inténtalo de nuevo.");
    } else {
      setError("");
      router.push("/dashboard");
    }
  };

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
        <div className="flex-auto h-full items-center justify-center p-4 px-10">
          <div className="flex p-1.5 justify-center mb-4">
            <Image
              src="/home/logo-balanpy.png"
              alt="Logo Balanpy"
              width={300}
              height={300}
            />
          </div>
          <form onSubmit={handleSubmit}>
            {fieldsFormLogin.slice(0, 2).map((field) => (
              <div key={field.id} className="flex flex-col w-full px-2 py-2">
                <Label text={field.labelText} htmlFor={field.id} />
                <Input
                  id={field.id}
                  placeholder={field.placeholder}
                  type={field.id === "password" ? "password" : "text"}
                />
              </div>
            ))}

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <button
              type="submit"
              className="py-2 px-4 w-full mt-4 font-poppins font-medium rounded-[5px] outline-none border-4 border-balanpy box-border transition-all duration-300 ease-in-out text-primary bg-balanpy hover:bg-white hover:text-balanpy"
            >
              Login
            </button>
          </form>

          <p className="text-center p-2 text-sm text-zinc-700 font-medium mb-4">
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
