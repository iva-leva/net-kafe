import { Box, Text } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";
import TextEn from "@/components/home/TextEn";

const TextHomeMiniEn = () => {
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
        {/* Discover the Net@Kafé */}
        <Text>Enjoy Food, Drinks & Sports </Text>
        <Text>in the Heart of Albufeira!</Text>
      </Box>
      <Box
        p="6vw"
        pt="3vw"
        fontFamily={fontNormal}
        textAlign="justify"
        fontSize="5vw"
      >
        <TextEn />
      </Box>
    </Box>
  );
};

export default TextHomeMiniEn;
