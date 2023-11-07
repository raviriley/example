import Head from "next/head";
import Toggle from "./toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>example demo woo</title>
      </Head>
      <Toggle  />
      <main>{children}</main>
    </>
  );
}
