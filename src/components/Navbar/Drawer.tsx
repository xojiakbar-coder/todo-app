import React from "react";
import Items from "./Items";
import Image from "next/image";
import { useDrawer } from "@/context/DrawerContext";
import { useThemeData } from "@/context/ThemeContext";
import sunSvgIcon from "../../../public/assets/icons/sun.svg";
import moonSvgIcon from "../../../public/assets/icons/moon.svg";

const Drawer: React.FC = () => {
  const { theme, toggleTheme } = useThemeData();
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const handleClick = () => {
    toggleDrawer();
    toggleTheme();
  };

  return (
    <nav className="fixed top-0 z-[999] bg-gray-800 text-white p-4 w-full h-full flex flex-col">
      <Items flexDir="col" />
      <button
        onClick={handleClick}
        className="flex justify-center items-center text-[24px] border-none bg-custom-gradient h-[40px] w-max px-3 rounded-lg cursor-pointer transition duration-[300ms] ease-in select-none mt-4"
      >
        {theme === "light" ? (
          <Image src={moonSvgIcon} alt="moon icon" />
        ) : (
          <Image src={sunSvgIcon} alt="sun icon" />
        )}
      </button>
    </nav>
  );
};

export default Drawer;
