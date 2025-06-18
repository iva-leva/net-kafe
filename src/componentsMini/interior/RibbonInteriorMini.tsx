import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo/logoWhite.png";
import { zIndexRibbonIni } from "@/constants/zIndex";
import { colorPrimaryOp60 } from "@/constants/colors";
import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { fontNice } from "@/constants/fonts";

const RibbonInteriorMini = () => {
  const { lang } = useContext(LangContext);

  return (
    <Flex
      position="absolute"
      top="94vw"
      right="0"
      w="100vw"
      minHeight="13vw"
      color="white"
      bg={colorPrimaryOp60}
      justifyContent="center"
      alignItems="center"
      fontSize="6.5vw"
      fontFamily={fontNice}
      fontStyle="normal"
      fontWeight="bold"
      zIndex={zIndexRibbonIni}
    >
      <Text>{lang === "En" ? "Discover your" : "Descubram o seu"}</Text>
      <Image w="11vw" src={logo} />
      <Text>Net@Kafé!</Text>
    </Flex>
  );
};

export default RibbonInteriorMini;
