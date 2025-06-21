import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import OrangeOverlayBox from "../OrangeOverlayBox";
import { fontNice, fontNormal } from "@/constants/fonts";
import TextPt from "./TextPt";

const TextHomePt = () => {
  const fontSizeHeading = useBreakpointValue({
    base: "9vw",
    sm: "2.1rem",
    md: "2.3rem",
    lg: "4vw",
    xl: "2.7rem",
  });
  const fontSize = useBreakpointValue({
    base: "5vw",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBox />
      <Box
        pt="2vw"
        pb="1vw"
        px="3vw"
        lineHeight="1.2"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize={fontSizeHeading}
      >
        <Text>Aproveite comida, bebidas e esportes </Text>
        <Text>no coração de Albufeira!</Text>
      </Box>
      <Box
        p="3vw"
        pt={0}
        fontSize={fontSize}
        fontFamily={fontNormal}
        textAlign="justify"
      >
        <TextPt />
      </Box>
    </Box>
  );
};

export default TextHomePt;
