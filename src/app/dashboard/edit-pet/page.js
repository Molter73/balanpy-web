import Input from "@/components/register/Input";
import { Label } from "@/components/register/Label";
import { fieldsFormPetsRow } from "@/constants/form";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import { fieldsFormPets } from "@/constants/form";
import Container from "@/components/container";
import styles from "@/app/style";

export default function Home() {
  return (
    <main className="justify-items-center grid grid-cols-1 p-20 min-h-screen bg-gradient-to-b from-balanpy-500 from-20% via-balanpy-700 via-65% to-balanpy-900 to-100%">
      <div className="justify-center">
        <div className="flex justify-center w-auto p-1">
          <img
            src="../pets/LogoBalanpyBlanco.png"
            alt="Balanpy Logo"
            width={120}
            height={120}
          ></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className={`${styles.heading2} text-white text-center`}>
            Edita la Información de tu Mascota
          </h1>
        </div>
      </div>

      <section className={`${styles.paddingX} ${styles.flexCenter} m-5`}>
        <div
          className={`${styles.boxWidthPets} p-10 mx-auto rounded-[50px] w-full bg-white`}
        >
          <div className="flex">
            <Container
              styles="mr-10 gap-4"
              justify="justify-center items-center"
            >
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center text-center w-40 h-40 border-balanpy-800 border-4 rounded-full mb-6">
                  <button className="text-center h-40 text-balanpy-900 text-9xl">
                    +
                  </button>
                </div>
                <p className="text-balanpy-900 font-semibold text-2xl text-center">
                  Sube la imagen de tu mascota
                </p>
                <p className="text-balanpy-800 font-medium text-center w-2/3">
                  La imagen debe estar en formato .jpg o .png
                </p>
              </div>
            </Container>

            <Container styles="p-4">
              <div className="flex flex-row w-full">
                {fieldsFormPets.slice(0, 3).map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col w-full px-2 py-4"
                  >
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {fieldsFormPets.slice(3, 7).map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col w-full px-2 py-2"
                  >
                    <Label text={field.labelText} htmlFor={field.id} />
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>

              <div className="flex-1 w-full p-2 flex flex-row justify-between md:mt-4">
                {fieldsFormPetsRow.map((row, i) => (
                  <div
                    key={row.title + i}
                    className="flex flex-col ss:my-0 my-4"
                  >
                    <h4
                      className={`${styles.paragraph} font-poppins font-normal text-zinc-700`}
                    >
                      {row.title}
                    </h4>
                    <ul className="list-none mt-4">
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            className="mb-4"
                            key={row.title + i + "-" + index}
                          >
                            <Input
                              id={row.title + i + "-" + index}
                              placeholder={row.text}
                            />
                          </div>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
          </div>
          <div className="flex justify-center mt-8 gap-6 ">
            <ButtonSecondary
              styles={"text-[20px]"}
              text={"Cancelar"}
              href="/dashboard"
            />
            <ButtonPrimary
              styles={"text-[20px]"}
              text={"Continuar"}
              href="/dashboard"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
