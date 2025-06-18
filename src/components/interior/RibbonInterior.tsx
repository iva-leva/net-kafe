import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo/logoWhite.png";
import { colorPrimaryOp60 } from "@/constants/colors";
import { zIndexRibbonIni } from "@/constants/zIndex";
import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { fontNice } from "@/constants/fonts";

const RibbonInterior = () => {
  const { lang } = useContext(LangContext);

  return (
    <Flex
      position="absolute"
      top="21vw"
      right="0"
      w="80vw"
      minHeight="7vw"
      color="white"
      bg={colorPrimaryOp60}
      justifyContent="center"
      alignItems="center"
      fontSize="4vw"
      fontFamily={fontNice}
      fontStyle="normal"
      fontWeight="bold"
      zIndex={zIndexRibbonIni}
    >
      <Text>{lang === "En" ? "Discover your" : "Descubram o seu"}</Text>

      <Image w="7vw" src={logo} />
      <Text>Net@Kafé!</Text>
    </Flex>
  );
};

export default RibbonInterior;
