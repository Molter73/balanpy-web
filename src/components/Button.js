import React from "react";

export const ButtonPrimary = ({ styles, text }) => {
  return React.createElement(
    "button",
    {
      type: "button",
      className: `py-2 px-4 font-poppins font-semibold text-[14px] text-primary bg-balanpy rounded-[5px] outline-none border-4 border-balanpy box-border hover:bg-white hover:text-balanpy transition-all duration-300 ease-in-out ${styles}`,
    },
    text
  );
};

export const ButtonSecondary = ({ styles, text }) => {
  return React.createElement(
    "button",
    {
      type: "button",
      className: `py-2 px-4 font-poppins font-semibold text-[14px] text-balanpy bg-white rounded-[5px] outline-none border-4 border-balanpy box-border hover:bg-balanpy hover:text-primary transition-all duration-300 ease-in-out ${styles}`,
    },
    text
  );
};