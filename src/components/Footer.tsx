import { Box, HStack, VStack } from "@chakra-ui/react";

import IconsTexts from "./footer/IconsTexts";
import Copyright from "./footer/Copyright";
import OrangeOverlayBoxBig from "./OrangeOverlayBoxBig";
import { colorFooter, colorPrimary } from "../constants/colors";
import { zIndexFooter } from "@/constants/zIndex";
import { fontFooter } from "@/constants/fonts";

interface Props {
  footer100: boolean;
}

const Footer = ({ footer100 }: Props) => {
  return (
    <HStack
      w="100%"
      justifyContent="right"
      overflowY="clip"
      bg={colorPrimary}
      zIndex={zIndexFooter}
    >
      <VStack w={footer100 ? "100%" : { base: "100%", sm: "80%" }}>
        <Box w="100%">
          <Box
            w="100%"
            position="relative"
            overflow="hidden"
            overflowX="clip"
            padding={{ base: "6vw", sm: "3vw" }}
            fontFamily={fontFooter}
            bg={colorPrimary}
          >
            <OrangeOverlayBoxBig />
            <IconsTexts
              position="relative"
              color="transparent"
              bg={colorPrimary}
              footer100={footer100}
            />

            <OrangeOverlayBoxBig />
            <IconsTexts
              position="absolute"
              top={{ base: "6vw", sm: "3vw" }}
              color={colorFooter}
              bg="transparent"
              footer100={footer100}
            />
          </Box>
          <Copyright />
        </Box>
      </VStack>
    </HStack>
  );
};

export default Footer;
