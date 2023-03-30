import React from "react";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "@/components/Search/Search";
import Nav from "@/components/Nav";
import {
  faBuilding,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Home-Components/sections/Footer";

config.autoAddCss = false;

function Contact() {
  function handleMessage(e) {
    return e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Contact - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <div className="h-screen bg-black dark:bg-slate-800 allEMT:h-auto grid grid-cols-2 allEMT:grid-cols-1">
        <Search />
        <Nav />
        <div className="h-full dark:text-white bg-white dark:bg-black rounded-br-3xl grid place-items-center allEMT:pt-32 allEMT:pb-8 duration-500">
          <div className="w-[90%] max-w-lg space-y-8">
            <h1 className="text-8xl allLM:text-6xl allEM:text-6xl allT:text-5xl allEMT:text-center allEMT:mb-14">
              Contact us
            </h1>
            <p className="text-xl allEMT:text-base">
              Here, we believe that knowledge and inspiration should be
              accessible to all regardless of age, background, or interests.
            </p>
            <div className="space-y-6">
              <div className="flex gap-5">
                <FontAwesomeIcon className="text-xl" icon={faBuilding} />
                <p className="text-lg allEMT:text-base">
                  No.2, Rehoboth Crescent, VOERA Est., Arepo, Ogun state
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <FontAwesomeIcon className="text-xl" icon={faPhone} />
                <p className="text-lg allEMT:text-base">+234 818 112 0601</p>
              </div>

              <div className="flex allT:flex-col gap-4 items-center allT:items-start">
                <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
                <p className="text-lg allEMT:text-base">
                  mainasara.o.olulanke@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid text-white place-items-center h-full allEMT:pt-8">
          <form
            onSubmit={handleMessage}
            className="w-[75%] lg:w-[90%] flex flex-col gap-8 allEMT:w-[90%] allEMT:pb-10 allEMT:border-b"
          >
            <div className="flex gap-8">
              <label className="text-lg allEMT:text-base w-full">
                First name
                <input
                  type="text"
                  name="firstName"
                  required={true}
                  className="dark:text-white bg-transparent border border-white pl-2 allEMT:text-base w-full h-12 rounded-lg mt-4 outline-none"
                />
              </label>
              <label className="text-lg allEMT:text-base w-full">
                Last name
                <input
                  type="text"
                  name="lastName"
                  required={true}
                  className="dark:text-white bg-transparent border border-white pl-2 allEMT:text-base w-full h-12 rounded-lg mt-4 outline-none"
                />
              </label>
            </div>

            <label className="text-lg allEMT:text-base">
              Email
              <input
                type="email"
                name="email"
                required={true}
                className="dark:text-white bg-transparent border border-white pl-2 allEMT:text-base w-full h-12 rounded-lg mt-4 outline-none"
              />
            </label>
            <label className="text-lg allEMT:text-base">
              Phone number (optional)
              <input
                type="number"
                name="phoneNo"
                className="dark:text-white bg-transparent border border-white pl-2 allEMT:text-base w-full h-12 rounded-lg mt-4 outline-none"
              />
            </label>
            <label className="text-lg allEMT:text-base">
              Message
              <textarea
                type="text"
                name="message"
                required={true}
                rows={4}
                cols={40}
                className="dark:text-white bg-transparent border border-white w-full pl-2 pt-2 allEMT:text-base rounded-lg mt-4 outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg bg-black px-5 py-3 text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white border duration-500 w-fit text-base allEMT:mx-auto"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="allLM:hidden laptop:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
