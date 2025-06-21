import { Box, Text } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";
import TextPt from "@/components/home/TextPt";

const TextHomeMiniPt = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxMini />
      <Box
        pt="3vw"
        px="6vw"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize="9vw"
        lineHeight="1.2"
      >
        <Text>Aproveite comida, bebidas e desportos </Text>
        <Text>no coração de Albufeira!</Text>
      </Box>
      <Box
        p="6vw"
        pt="3vw"
        fontFamily={fontNormal}
        textAlign="justify"
        fontSize="5vw"
      >
        <TextPt />
      </Box>
    </Box>
  );
};

export default TextHomeMiniPt;
