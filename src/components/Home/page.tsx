import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
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
    <div className="text-white">
      <h1 className="text-white font-mont text-[40px]">
        <span ref={el} />
      </h1>
      <Link href="/todos">Go to Todo Page</Link>
    </div>
  );
};

export default Home;
