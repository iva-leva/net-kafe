import { VStack, Heading, Box } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";
import TextEn from "@/components/aboutUs/TextEn";

const TextSportsHangoutMiniEn = () => {
  return (
    <VStack
      position="relative"
      overflow="hidden"
      w="100%"
      overflowY="clip"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxMini />

      <Heading
        pt="3vw"
        px="6vw"
        lineHeight="1.2"
        fontWeight="bold"
        textAlign="center"
        fontSize="9vw"
        fontFamily={fontNice}
      >
        Welcome to Your Ultimate Sports Hangout!
      </Heading>
      <Heading pb="1vw" textAlign="center" size={"3xl"}>
        ⚽🍕🍺
      </Heading>

      <Box
        p="6vw"
        pt="3vw"
        fontSize="5vw"
        textAlign="justify"
        fontFamily={fontNormal}
      >
        <TextEn />
      </Box>
    </VStack>
  );
};

export default TextSportsHangoutMiniEn;
