import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { VStack } from "@chakra-ui/react";
import PictureFootbal from "../components/aboutUs/PictureFootbal";
import { colorSecondary } from "@/constants/colors";
import PictureAIMini from "./aboutUs/PictureAIMini";
import { scrollToTop } from "../components/footer/ScrollUp";
import TextSportsHangoutMiniEn from "./aboutUs/TextSportsHangoutMiniEn";
import TextSportsHangoutMiniPt from "./aboutUs/TextSportsHangoutMiniPt";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentAboutUsMini = ({ handleClickNav }: Props) => {
  handleClickNav("About Us");
  scrollToTop();
  const { lang } = useContext(LangContext);
  return (
    <VStack w="100%" pt="57vw" bg={colorSecondary} overflowX={"clip"}>
      <PictureAIMini />
      {lang === "En" ? (
        <TextSportsHangoutMiniEn />
      ) : (
        <TextSportsHangoutMiniPt />
      )}
      <PictureFootbal />
    </VStack>
  );
};

export default ContentAboutUsMini;
