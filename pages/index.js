import { useEffect } from "react";
import Head from "next/head";
import Splash from "../components/Home-Components/features/Splash-Screen/Splash";
import Nav from "../components/Nav";
import Hero from "../components/Home-Components/sections/Hero";
import MainBody from "../components/Home-Components/sections/MainBody/MainBody";
import Footer from "../components/Home-Components/sections/Footer";
import { useSessionStorage } from "react-use";

export default function Home() {
  const [splashed, setSplashed] = useSessionStorage("splashed");

  useEffect(() => {
    const timeOut = setTimeout(() => setSplashed("true"), 2500);
    window.addEventListener("beforeunload", () => setSplashed(""));

    return () => {
      clearTimeout(timeOut);
      window.removeEventListener("beforeunload", () => setSplashed(""));
    };
  }, [setSplashed]);

  return (
    <>
      <Head>
        <title>The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${
          splashed !== "true"
            ? "h-screen overflow-hidden"
            : "h-auto overflow-scroll"
        }`}
      >
        {splashed !== "true" ? <Splash /> : ""}
        <Nav />
        <Hero />
        <MainBody />
        <Footer />
      </div>
    </>
  );
}
