import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { HStack, VStack } from "@chakra-ui/react";
import { colorSecondary } from "@/constants/colors";
import PictureRestaurant from "./location/PictureRestaurant";
import Maps from "./location/Maps";
import TextLocationEn from "./location/TextLocationEn";
import TextLocationPt from "./location/TextLocationPt";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentLocation = ({ handleClickNav }: Props) => {
  handleClickNav("Location");
  const { lang } = useContext(LangContext);
  return (
    <HStack mt="7vw" bg={colorSecondary} w="100%" justifyContent="right">
      <VStack w="80%" overflowX={"clip"}>
        <PictureRestaurant />
        {lang === "En" ? <TextLocationEn /> : <TextLocationPt />}
        <Maps />
      </VStack>
    </HStack>
  );
};

export default ContentLocation;
