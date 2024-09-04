import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import useThemeData from "@/hook/theme";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useThemeData();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="flex justify-center items-center text-[24px] border-none bg-red-300 h-[40px] w-max px-2 rounded-lg"
      >
        {theme === "light" ? (
          <MoonOutlined style={{ color: "#000" }} />
        ) : (
          <SunOutlined style={{ color: "#fff" }} />
        )}
      </button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
