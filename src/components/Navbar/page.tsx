import Drawer from "./Drawer";
import Image from "next/image";
import useThemeData from "@/hook/theme";
import React, { useState } from "react";
import sunSvgIcon from "../../../public/assets/icons/sun.svg";
import moonSvgIcon from "../../../public/assets/icons/moon.svg";
import menuSvgIcon from "../../../public/assets/icons/menu.svg";
import Link from "next/link";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useThemeData();
  return (
    <nav className="flex items-center justify-between w-full bg-[#151515] py-4 h-[90px] max-[90px] min-h-[90px] text-white backdrop-blur-[10px] px-[30px] shadow-md">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <div className="text-[28px] font-bold font-mont uppercase select-none cursor-pointer">
            Todo App
          </div>
        </Link>
        <div className="flex items-center gap-[21px]">
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:underline font-ntr text-[18px] font-[400]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline font-ntr text-[18px] font-[400]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline font-ntr text-[18px] font-[400]"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="lg:flex md:flex xl:flex justify-center items-center text-[24px] border-none bg-custom-gradient h-[40px] w-max px-3 rounded-lg cursor-pointer transition duration-[300ms] ease-in hidden select-none"
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
