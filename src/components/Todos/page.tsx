import Head from "next/head";
import Link from "next/link";

export default function TodoPage() {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <div className="w-full">
        <h1>Hello</h1>
        <Link href="/">Go to back</Link>
      </div>
    </>
  );
}
