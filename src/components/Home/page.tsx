import Link from "next/link";
import Typed from "typed.js";
import SliderComponent from "./Slider";
import { useEffect, useRef } from "react";
import { useThemeData } from "@/context/ThemeContext";

const Home = () => {
  const { theme } = useThemeData();

  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to TODO APP"],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-start bg-custom-bg min-h-[100vh] bg-[length:130px_130px] bg-no-repeat w-[100%] bg-[left_top_18rem]`}
    >
      <div className="flex items-center justify-between w-[90%] pt-[70px] xl:flex-row lg:flex-row md:flex-row flex-col gap-[40px]">
        <div className="self-start pt-[50px]">
          <h1
            className={`relative z-[-1] font-semibold font-mont text-[40px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <span ref={el} className="text-inherit" />
          </h1>
          <Link
            href="/todos"
            className={`${
              theme === "dark" ? "text-blue-300" : "text-blue-700"
            } underline`}
          >
            Go to Todo Page
          </Link>
        </div>
        <div className="xl:w-max lg:w-max md:w-max w-full">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
