import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar/page";
import { ThemeProvider } from "@/context/ThemeContext";
import { DrawerProvider } from "@/context/DrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <div className="overflow-scroll min-h-[100vh] max-h-[100vh]">
          <div className="min-h-[100vh] max-h-[100vh]">
            <Navbar />
            <Component {...pageProps} />
            <div>Footer</div>
          </div>
        </div>
      </DrawerProvider>
    </ThemeProvider>
  );
}

export default MyApp;
