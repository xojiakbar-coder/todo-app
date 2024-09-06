import Items from "./Items";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useThemeData } from "@/context/ThemeContext";
import sunSvgIcon from "../../../public/assets/icons/sun.svg";
import moonSvgIcon from "../../../public/assets/icons/moon.svg";
import menuSvgIcon from "../../../public/assets/icons/menu.svg";
import closeSvgIcon from "../../../public/assets/icons/close.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useThemeData();

  return (
    <nav
      className={`flex items-center sticky top-0 z-[999] justify-between w-full bg-[#13161b] py-4 min-h-[90px] text-white backdrop-blur-[10px] px-[30px] shadow-sm ${
        theme === "dark" ? "shadow-gray-500" : "shadow-gray-950"
      }`}
    >
      <div
        className={`flex justify-between items-center w-full ${
          isOpen ? "flex-col" : "flex-row"
        }`}
      >
        <div
          className={`flex justify-between items-center xl:w-max lg:w-max md:w-max w-full`}
        >
          <Link href="/">
            <div className="text-[28px] font-bold font-mont uppercase select-none cursor-pointer">
              Todo App
            </div>
          </Link>
          <div>
            {!isOpen && (
              <button
                className="xl:hidden lg:hidden md:hidden flex border-none select-none cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Image src={menuSvgIcon} className="w-[30px]" alt="menu icon" />
              </button>
            )}
            {isOpen && (
              <button
                className="xl:hidden lg:hidden md:hidden flex border-none select-none cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={closeSvgIcon}
                  className="w-[30px]"
                  alt="menu icon"
                />
              </button>
            )}
          </div>
        </div>
        <div
          className={`
             flex items-center xl:w-max lg:w-max md:w-max ${
               isOpen && "w-full"
             }  ${!isOpen ? "flex-row" : "flex-col"}`}
        >
          <div
            className={`${
              !isOpen ? "xl:flex lg:flex md:flex hidden" : "flex flex-col"
            } gap-[20px] ${isOpen && "w-full"} `}
          >
            <Items flexDir={!isOpen ? "row" : "col"} />
            <div>
              <button
                onClick={toggleTheme}
                className="flex justify-center items-center text-[24px] border-none bg-custom-gradient h-[40px] w-max px-3 rounded-lg cursor-pointer transition duration-[300ms] ease-in select-none"
              >
                {theme === "light" ? (
                  <Image src={moonSvgIcon} alt="icon not found" />
                ) : (
                  <Image src={sunSvgIcon} alt="icon not found" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
