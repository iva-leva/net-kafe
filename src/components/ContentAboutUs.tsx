import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { HStack, VStack } from "@chakra-ui/react";
import PictureAI from "./aboutUs/PictureAI";
import PictureFootbal from "./aboutUs/PictureFootbal";
import { colorSecondary } from "@/constants/colors";
import { scrollToTop } from "./footer/ScrollUp";
import TextSportsHangoutEn from "./aboutUs/TextSportsHangoutEn";
import TextSportsHangoutPt from "./aboutUs/TextSportsHangoutPt";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentAboutUs = ({ handleClickNav }: Props) => {
  handleClickNav("About Us");
  scrollToTop();
  const { lang } = useContext(LangContext);
  return (
    <HStack
      mt="7vw"
      w="100%"
      justifyContent="right"
      bg={colorSecondary}
      overflowX={"clip"}
    >
      <VStack w="80%" overflowX={"clip"}>
        <PictureAI />
        {lang === "En" ? <TextSportsHangoutEn /> : <TextSportsHangoutPt />}
        <PictureFootbal />
      </VStack>
    </HStack>
  );
};

export default ContentAboutUs;
