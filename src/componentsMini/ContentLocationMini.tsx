import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { HStack, VStack } from "@chakra-ui/react";
import { colorSecondary } from "@/constants/colors";
import PictureRestaurant from "../components/location/PictureRestaurant";
import Maps from "../components/location/Maps";
import TextLocationMiniEn from "./location/TextLocationMiniEn";
import TextLocationMiniPt from "./location/TextLocationMiniPt";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentLocationMini = ({ handleClickNav }: Props) => {
  handleClickNav("Location");
  const { lang } = useContext(LangContext);
  return (
    <HStack pt="57vw" bg={colorSecondary} w="100%">
      <VStack w="100%">
        <PictureRestaurant />
        {lang === "En" ? <TextLocationMiniEn /> : <TextLocationMiniPt />}
        <Maps />
      </VStack>
    </HStack>
  );
};

export default ContentLocationMini;
