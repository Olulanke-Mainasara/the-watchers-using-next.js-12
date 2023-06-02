import Image from "next/image";

import React from "react";

import Section4aImg from "../../../public/Home/Section4a.jpg";
import Section4bImg from "../../../public/Home/Section4b.jpg";
import Button from "../UI/Section/Button";
import H1 from "../UI/Section/H1";
import P from "../UI/Section/P";
import Text from "../UI/Section/Text";

function SectionFour() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex allEMT:flex-col allEMT:gap-14 allIL:h-auto allIL:pt-56">
      <Text position={"justify-end"} height={"allLM:h-[705px]"}>
        <H1>We inspire, no matter the reader</H1>

        <P>
          Here, we believe that knowledge and inspiration should be accessible
          to all. Regardless of your age, background, or interests, we strive to
          create content that is comprehensive and engaging. Our aim is to
          provide a platform where everyone can come to explore and learn about
          the world around us, and to be inspired by the endless possibilities
          of what we can achieve.
        </P>

        <P>
          Whether you&apos;re a curious child, a student looking for a reliable
          source of information, or simply someone seeking to expand your
          horizons, our content is designed to cater to your needs. We believe
          that everyone has the potential to be inspired, and it is our mission
          to bring that inspiration to you, no matter who you are or where you
          come from.
        </P>

        <Button />
      </Text>

      <section className="w-1/2 h-full flex items-center justify-center allLM:justify-start allEMT:w-screen allEMT:h-[450px]">
        <div className="relative w-3/5 max-w-[515px] h-3/4 allEMT:h-full allLM:w-[90%] allLM:h-[705px] allEM:w-[310px] allT:w-[252px]">
          <Image
            src={Section4aImg}
            width={500}
            height={800}
            placeholder="blur"
            className="absolute w-3/5 md:w-4/5 h-3/5 border border-black dark:border-white rounded-2xl top-0 left-0 allEMT:min-h-[250px]"
            alt="Section 4a"
          />
          <Image
            src={Section4bImg}
            width={500}
            height={800}
            placeholder="blur"
            className="absolute w-3/5 md:w-4/5 h-3/5 border rounded-2xl bottom-0 right-0 allEMT:min-h-[250px]"
            alt="Section 4b"
          />
        </div>
      </section>
    </section>
  );
}

export default SectionFour;
