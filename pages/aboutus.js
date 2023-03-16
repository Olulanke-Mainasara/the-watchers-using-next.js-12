import React from "react";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Search from "@/components/Search/Search";
import Nav from "@/components/Nav";

config.autoAddCss = false;

function About() {
  return (
    <>
      <Head>
        <title>About - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <div className="dark:text-white h-screen flex items-center justify-center">
        <Search />
        <Nav />
        <h1 className="text-5xl allEMT:text-2xl">Still in Development</h1>
      </div>
    </>
  );
}

export default About;
