import { socialMedia } from "../constants";
import React from "react";

export default function Topbar() {
    return (
      <div className="w-full flex justify-between items-center p-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="phone.svg"
              alt="phone"
              className="w-[16px] h-[16px] object-contain"
            />
            <p className="font-poppins font-normal text-[12px] leading-[12px] text-white">
              +34 666 666 666
            </p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="mail.svg"
              alt="email"
              className="w-[16px] h-[16px] object-contain"
            />
            <p className="font-poppins font-normal text-[12px] leading-[12px] text-white">
              info@balanpy.com
            </p>
          </div>
        </div>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.name}
              className={`w-[21px] h-[21px] object-contain cursor-pointer  ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    );
}