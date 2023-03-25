import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Search from "@/components/Search/Search";
import Nav from "@/components/Nav";
import { categories } from "@/data/Arrays";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

function Categories() {
  return (
    <>
      <Head>
        <title>Categories - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <div className="w-screen flex flex-col">
        <Search />
        <Nav />
        <header className="w-full dark:text-white pt-32 pb-16 flex items-center justify-center">
          <h1 className="text-9xl allLM:text-8xl allEM:text-6xl allT:text-5xl">
            Categories
          </h1>
        </header>

        <section className="py-10 px-14 allIL:px-5 h-full">
          <div className="grid grid-cols-3 allLM:grid-cols-2 allEMT:grid-cols-1 allLM:gap-8 gap-14 h-full">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="w-full allEMT:max-w-[420px] h-[550px] allT:h-[420px] mx-auto rounded-2xl bg-black dark:bg-white flex flex-col items-center justify-center overflow-hidden duration-500"
                >
                  <div className="relative basis-[40%] w-full h-full">
                    <Image
                      src={category.imgsrc}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      alt="Category Image"
                    />
                  </div>

                  <div className="dark:text-black text-white flex flex-col items-center justify-evenly basis-[60%] px-[5%] duration-500">
                    <h5 className="text-3xl allT:text-2xl">{category.title}</h5>
                    <p className="text-base allT:text-xs">{category.text}</p>
                    <Link
                      className="text-xl rounded-2xl px-4 py-3 allIL:px-5 allEM:text-lg allT:text-base text-white dark:text-black hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white transition-colors duration-500"
                      href="#"
                    >
                      View <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Categories;
