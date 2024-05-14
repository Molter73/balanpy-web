"use client";
import { useState } from "react";
import { navLinks } from "../constants";
import { ButtonPrimary, ButtonSecondary } from "./Button";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src="/logo-balanpy.png"
        alt="balanpy"
        className="w-[200px] h-[50px]"
      />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal cursor-pointer text-[16px] hover:text-balanpy ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <ButtonPrimary styles={"ml-10"} text={"Iniciar Sesión"} />
      <ButtonSecondary styles={"ml-5"} text={"Registrarse"} />
    </nav>
  );
}
