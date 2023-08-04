import React from "react";

import ASection1Img from "../../public/About/ASection1.jpeg";
import Section from "../UI/Section/Section";
import SImage from "../UI/Section/SectionImage";
import Text from "../UI/Section/TextBlock";
import TextHeader from "../UI/Section/TextHeader";
import P from "../UI/Section/TextParagraph";

function ASection1() {
  return (
    <Section>
      <Text position={"justify-end"}>
        <TextHeader>Who are we?</TextHeader>

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

      <SImage image={ASection1Img} alt={"About us Section 1"} />
    </Section>
  );
}

export default ASection1;
