import Image from "next/image";

import React from "react";

import ASection2Img from "../../public/About/ASection2.jpeg";
import H1 from "../Home-Components/UI/Section/H1";
import P from "../Home-Components/UI/Section/P";
import SImage from "../Home-Components/UI/Section/SImage";
import Text from "../Home-Components/UI/Section/Text";

function ASection2() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex allEMT:flex-col allEMT:gap-14 allIL:h-auto">
      <SImage>
        <Image
          src={ASection2Img}
          fill
          priority
          placeholder="blur"
          className="absolute top-0 left-0 border border-black dark:border-white rounded-2xl"
          alt="Our Mission"
        />
      </SImage>

      <Text position={"start"}>
        <H1>Our mission</H1>

        <P>
          Here, you will be transported to a world of endless discovery as we
          delve into a wide range of topics that span across all areas and
          sectors of the world. From science and technology, to culture and
          history, our goal is to provide a comprehensive and informative look
          into the marvels of our world and beyond. Whether you&apos;re
          interested in exploring the mysteries of the universe, learning about
          the latest advancements in medicine, or discovering the rich tapestry
          of human history, we&apos;ve got you covered.
        </P>
      </Text>
    </section>
  );
}

export default ASection2;
