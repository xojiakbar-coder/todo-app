import React from "react";
import Image from "next/image";
import closeSvgIcon from "../../../public/assets/icons/close.svg";

type ParamType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Drawer({ isOpen, setIsOpen }: ParamType) {
  return (
    <div
      className={`fixed inset-0 bg-gray-950 bg-opacity-75 backdrop-blur-[1px] max-h-[100vh] min-h-[100vh] z-50 transition-opacity duration-[350ms] ease-in ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`absolute bg-white w-1/2 h-full p-4 right-0 transition-transform duration-[350ms] ease-in ${
          isOpen ? "flex flex-col translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <button
          className="text-black mb-4 border-none select-none cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <Image src={closeSvgIcon} className="w-[30px]" alt="menu icon" />
        </button>
        <ul className="space-y-4">
          <li>
            <a href="#home" className="text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
