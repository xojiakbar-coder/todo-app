import Drawer from "./Drawer";
import Image from "next/image";
import useThemeData from "@/hook/theme";
import React, { useState } from "react";
import sunSvgIcon from "../../../public/assets/icons/sun.svg";
import moonSvgIcon from "../../../public/assets/icons/moon.svg";
import menuSvgIcon from "../../../public/assets/icons/menu.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useThemeData();
  return (
    <nav className="bg-blue-700 p-4 text-white backdrop-blur-[10px] px-[30px]">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold font-mont uppercase">Todo App</div>
        <div className="flex items-center gap-[21px]">
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#home" className="hover:underline font-mont font-[500]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline font-mont font-[500]">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline font-mont font-[500]"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="lg:flex md:flex xl:flex justify-center items-center text-[24px] border-none bg-red-100 h-[40px] w-max px-3 rounded-lg cursor-pointer transition duration-[300ms] ease-in hidden select-none"
          >
            {theme === "light" ? (
              <Image src={moonSvgIcon} alt="icon not found" />
            ) : (
              <Image src={sunSvgIcon} alt="icon not found" />
            )}
          </button>
          <button
            className="md:hidden border-none select-none cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Image src={menuSvgIcon} className="w-[30px]" alt="menu icon" />
          </button>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </nav>
  );
};

export default Navbar;
