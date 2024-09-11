import React from "react";
import Link from "next/link";
import navbarItems from "@/utils/navbar";
import { useDrawer } from "@/context/DrawerContext";

type ParamType = {
  flexDir: string;
};

const Items: React.FC<ParamType> = ({ flexDir }) => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const handleClick = () => {
    if (flexDir === "col" && isDrawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <ul
      className={`flex items-center flex-${flexDir} ${
        flexDir === "col" ? "mt-[16px] w-full space-y-[12px]" : "space-x-[20px]"
      }`}
    >
      {navbarItems.map((item) => {
        return (
          <li
            key={item.id}
            className={`${flexDir === "col" && "w-full"} list-none`}
          >
            <Link
              href={item.href}
              onClick={handleClick}
              className={`font-mont font-[500] transition duration-[150ms] ease-in text-[18px] hover:bg-[#cddeff] hover:text-black ${
                flexDir === "col" &&
                "h-[45px] shadow-sm shadow-[#545e70] border-[#cddeff]"
              } flex items-center py-2 px-3 h-[40px] rounded-lg font-[400]`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Items;
