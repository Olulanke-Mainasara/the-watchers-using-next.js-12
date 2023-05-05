import React from "react";
import Head from "next/head";
import Search from "@/components/Search/Search";
import Nav from "@/components/Nav";
import ASection1 from "@/components/About-Components/ASection1";
import ASection2 from "@/components/About-Components/ASection2";
import ASection3 from "@/components/About-Components/ASection3";
import ASection4 from "@/components/About-Components/ASection4";
import Footer from "@/components/Home-Components/sections/Footer";
import ALastSection from "@/components/About-Components/ALastSection";

function About() {
  return (
    <>
      <Head>
        <title>About - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-screen">
        <Search />
        <Nav />
        <header className="flex items-center justify-center w-full pt-32 pb-16 dark:text-white allLM:pb-32">
          <h1 className="text-9xl allLM:text-8xl allEM:text-6xl allT:text-5xl">
            About us
          </h1>
        </header>
        <ASection1 />
        <ASection2 />
        <ASection3 />
        <ALastSection />
        <ASection4 />
        <Footer />
      </div>
    </>
  );
}

export default About;
