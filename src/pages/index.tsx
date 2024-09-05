import Head from "next/head";
import Link from "next/link";
import Main from "./main";
import Navbar from "@/components/Navbar/page";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Weloce to Todo App</title>
      </Head>
      <Navbar />
      <div className="w-full">
        <Main />
      </div>
    </>
  );
}
