import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo/logoLightRed.png";
import { colorPrimary, colorSecondaryOp70 } from "@/constants/colors";
import { zIndexRibbonAboutUs } from "@/constants/zIndex";
import { welcome } from "@/constants/texts";
import { fontNice } from "@/constants/fonts";

const RibbonAboutUsMini = () => {
  const { lang } = useContext(LangContext);
  return (
    <Flex
      position="absolute"
      top="31vw"
      right="0"
      w="100vw"
      minHeight="13vw"
      color={colorPrimary}
      bg={colorSecondaryOp70}
      justifyContent="center"
      alignItems="center"
      fontSize="6.5vw"
      fontFamily={fontNice}
      fontStyle="normal"
      fontWeight="bold"
      zIndex={zIndexRibbonAboutUs}
    >
      <Text>{welcome[lang]}</Text>
      <Image w="11vw" src={logo} />
      <Text>Net@Kafé!</Text>
    </Flex>
  );
};

export default RibbonAboutUsMini;
