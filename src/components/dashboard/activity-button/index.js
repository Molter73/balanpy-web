"use client";
import { useState } from "react";
import Modal from "@/components/modal";

export default function ActivityButton({ text, image, hoverImage, alt_text }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center justify-center align-center p-4">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleModal}
      >
        <img
          src={isHovered ? hoverImage : image}
          alt={alt_text}
          height="64"
          width="64"
          className="border rounded-xl border-balanpy-800 bg-balanpy-50 p-3 h-[64px] w-[64px] mb-2 cursor-pointer hover:bg-balanpy-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300"
        />
        <span className="text-black font-regular text-[14px]">{text}</span>
      </div>
      <Modal show={showModal} onClose={toggleModal} />
    </div>
  );
}
