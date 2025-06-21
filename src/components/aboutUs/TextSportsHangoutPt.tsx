import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import OrangeOverlayBoxBig from "../OrangeOverlayBoxBig";
import { fontNice, fontNormal } from "@/constants/fonts";
import TextPt from "./TextPt";

const TextSportsHangoutPt = () => {
  const fontSizeHeading = useBreakpointValue({
    base: "7vw",
    sm: "1.8rem",
    md: "2rem",
    lg: "4vw",
    xl: "2.4rem",
  });
  const fontSize = useBreakpointValue({
    base: "5vw",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <VStack
      position={"relative"}
      overflow={"hidden"}
      w="100%"
      overflowY={"clip"}
      fontStyle={"normal"}
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxBig />

      <Heading
        pt="2vw"
        px="3vw"
        lineHeight="1.2"
        fontWeight="bold"
        textAlign="center"
        fontSize={fontSizeHeading}
        fontFamily={fontNice}
      >
        Bem-vindo ao seu melhor ponto de encontro esportivo!
      </Heading>
      <Heading pb="1vw" textAlign="center" size={"3xl"}>
        ⚽🍕🍺
      </Heading>

      <Box
        p="3vw"
        pt={0}
        fontSize={fontSize}
        textAlign="justify"
        fontFamily={fontNormal}
      >
        <TextPt />
      </Box>
    </VStack>
  );
};

export default TextSportsHangoutPt;
