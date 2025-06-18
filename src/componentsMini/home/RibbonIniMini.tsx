import { useContext } from "react";
import LangContext from "@/contexts/langContext";

import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo/logoWhite.png";
import { colorPrimaryOp60 } from "../../constants/colors";
import { zIndexRibbonIni } from "@/constants/zIndex";
import { fontNice } from "@/constants/fonts";

const RibbonIniMini = () => {
  const { lang } = useContext(LangContext);

  return (
    <Flex
      position="absolute"
      top="35vw"
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
      <Text>{lang === "En" ? "Welcome to" : "Bem-vindo ao"}</Text>
      <Image w="11vw" src={logo} />
      <Text>Net@Kafé!</Text>
    </Flex>
  );
};

export default RibbonIniMini;
