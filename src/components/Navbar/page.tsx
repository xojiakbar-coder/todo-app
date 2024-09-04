import useThemeData from "@/hook/theme";
import React from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeData();
  return (
    <div>
      <h1 className="text-white">Navbar</h1>
    </div>
  );
};

export default Navbar;
