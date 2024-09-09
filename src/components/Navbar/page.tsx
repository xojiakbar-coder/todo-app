import Items from "./Items";
import Link from "next/link";
import Drawer from "./Drawer";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDrawer } from "@/context/DrawerContext";
import { useThemeData } from "@/context/ThemeContext";
import sunSvgIcon from "../../../public/assets/icons/sun.svg";
import moonSvgIcon from "../../../public/assets/icons/moon.svg";
import menuSvgIcon from "../../../public/assets/icons/menu.svg";
import closeSvgIcon from "../../../public/assets/icons/close.svg";

const Navbar: React.FC = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const { theme, toggleTheme } = useThemeData();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isDrawerOpen) {
        toggleDrawer(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isDrawerOpen, toggleDrawer]);

  return (
    <>
      <nav
        className={`flex items-center sticky top-0 z-[999] justify-between w-full bg-[#13161b] py-4 min-h-[90px] text-white backdrop-blur-[10px] xl:px-[60px] lg:px-[60px] md:px-[60px] sm:px-[20px] px-[20px] shadow-sm ${
          theme === "dark" ? "shadow-gray-500" : "shadow-gray-950"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <div className="text-[28px] font-bold font-mont uppercase select-none cursor-pointer">
              Todo App
            </div>
          </Link>
          <div>
            <div
              className={`xl:flex lg:flex md:flex hidden items-center space-x-8`}
            >
              <Items flexDir="row" />
              <button
                onClick={toggleTheme}
                className="flex justify-center items-center text-[24px] border-none bg-custom-gradient h-[40px] w-max px-3 rounded-lg cursor-pointer transition duration-[300ms] ease-in select-none"
              >
                {theme === "light" ? (
                  <Image src={moonSvgIcon} alt="moon icon" />
                ) : (
                  <Image src={sunSvgIcon} alt="sun icon" />
                )}
              </button>
            </div>
            {!isDrawerOpen && (
              <button
                className="xl:hidden lg:hidden md:hidden flex border-none select-none cursor-pointer"
                onClick={() => toggleDrawer(true)}
              >
                <Image src={menuSvgIcon} className="w-[30px]" alt="menu icon" />
              </button>
            )}
            {isDrawerOpen && (
              <button
                className="xl:hidden lg:hidden md:hidden flex border-none select-none cursor-pointer"
                onClick={() => toggleDrawer(false)}
              >
                <Image
                  src={closeSvgIcon}
                  className="w-[30px]"
                  alt="close icon"
                />
              </button>
            )}
          </div>
        </div>
      </nav>
      {isDrawerOpen && <Drawer />}
    </>
  );
};

export default Navbar;
