"use client";
import { useState } from "react";
import Modal from "@/components/dashboard/modal";

export default function ActivityButton({ text, image, hoverImage, alt_text, modalData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center justify-center align-center p-4">
      <div className="flex flex-col items-center justify-center align-center p-4">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleModal}
          className="border rounded-xl border-balanpy-800 bg-balanpy-50 p-3 h-[64px] w-[64px] mb-2 hover:bg-balanpy-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-300 flex items-center justify-center cursor-pointer"
        >
          <img
            src={isHovered ? hoverImage : image}
            alt={alt_text}
            height="64"
            width="64"
            className="h-[64px] w-[64px]"
          />
        </div>
      </div>
      <span className="text-black font-regular text-[14px]">{text}</span>
      <Modal
        show={showModal}
        onClose={toggleModal}
        data={modalData}
        className="transition-all duration-300 ease-in-out"
      />
    </div>
  );
}