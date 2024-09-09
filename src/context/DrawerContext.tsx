import React, { createContext, useContext, useState, useEffect } from "react";

interface DrawerContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: (state?: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isDrawerOpen");
      if (savedState !== null) {
        setIsDrawerOpen(JSON.parse(savedState));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isDrawerOpen", JSON.stringify(isDrawerOpen));
    }
  }, [isDrawerOpen]);

  const toggleDrawer = (state?: boolean) => {
    setIsDrawerOpen((prevState) => (state !== undefined ? state : !prevState));
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
