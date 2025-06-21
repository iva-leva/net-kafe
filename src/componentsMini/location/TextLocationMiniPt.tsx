import { Box, Heading } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";
import TextPt from "@/components/location/TextPt";

const TextLocationMiniPt = () => {
  return (
    <Box
      position="relative"
      overflow={"hidden"}
      mb={"-1.3vw"}
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxMini />
      <Heading
        pt="3vw"
        px="6vw"
        lineHeight="1.2"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize="9vw"
      >
        Descubra o Net@Kafé
      </Heading>
      <Box
        p="6vw"
        pt="3vw"
        fontSize="5vw"
        fontFamily={fontNormal}
        textAlign="justify"
      >
        <TextPt />
      </Box>
    </Box>
  );
};

export default TextLocationMiniPt;
