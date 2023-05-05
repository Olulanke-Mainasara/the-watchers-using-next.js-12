import React from "react";
import H1 from "../Home-Components/UI/Section/H1";
import { FaClock } from "react-icons/fa";

const offers = [
  {
    id: 1,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 2,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 3,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 4,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 5,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 6,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
];

function ASection3() {
  return (
    <section className="w-full dark:text-white max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex flex-col gap-14 items-center justify-center allIL:h-auto">
      <div className="flex flex-col gap-6 text-center">
        <H1>What we value</H1>
        <p className="mx-auto dark:opacity-70 text-2xl 2xl:text-3xl md:text-xl allEMT:text-base 2xl:max-w-[900px] laptop:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] allEMT:w-[75%] allEMT:max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>
      </div>

      <div className="grid w-full grid-cols-3 gap-10 px-10 md:grid-cols-2 allEMT:grid-cols-1 allEMT:gap-14">
        {offers.map((offer) => {
          return (
            <div key={offer.id} className="w-full mx-auto space-y-6">
              <FaClock className="text-2xl" />
              <h1 className="text-2xl">{offer.title}</h1>
              <p className="text-base dark:opacity-70 2xl:text-2xl md:text-base allEM:text-base allT:text-base">
                {offer.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ASection3;
