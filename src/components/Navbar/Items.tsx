import React from "react";
import Link from "next/link";
import navbarItems from "@/utils/navbar";

type ParamType = {
  flexDir: string;
};

const Items: React.FC<ParamType> = ({ flexDir }) => {
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
            <a
              href={item.href}
              className="font-ntr transition duration-[150ms] ease-in text-[18px] hover:bg-[#cddeff] hover:text-black flex items-center py-2 px-3 h-[40px] rounded-lg font-[400]"
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Items;
