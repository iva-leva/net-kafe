import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/img/Logo/logoLightRed.png";
import { colorPrimary, colorSecondaryOp70 } from "@/constants/colors";
import { zIndexRibbonAboutUs } from "@/constants/zIndex";
import { fontNice } from "@/constants/fonts";
import { welcome } from "@/constants/texts";

const RibbonAboutUs = () => {
  const { lang } = useContext(LangContext);
  return (
    <Flex
      position="absolute"
      top="21vw"
      right="0"
      w="80vw"
      minHeight="7vw"
      color={colorPrimary}
      bg={colorSecondaryOp70}
      justifyContent="center"
      alignItems="center"
      fontSize="4vw"
      fontFamily={fontNice}
      fontStyle="normal"
      fontWeight="bold"
      zIndex={zIndexRibbonAboutUs}
    >
      {welcome[lang]}
      <Image w="7vw" src={logo} />
      <Text>Net@Kafé!</Text>
    </Flex>
  );
};

export default RibbonAboutUs;
