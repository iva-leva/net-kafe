import { Box, VStack } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "./OrangeOverlayBoxMini";
import IconsTextsMini from "./footer/IconsTextsMini";
import Copyright from "../components/footer/Copyright";

import { colorFooter, colorPrimary } from "../constants/colors";
import { zIndexFooter } from "../constants/zIndex";
import { fontFooter } from "@/constants/fonts";

const FooterMini = () => {
  return (
    <VStack w="100%" overflowY="clip" bg={colorPrimary} zIndex={zIndexFooter}>
      <Box
        w="100%"
        position="relative"
        overflow="hidden"
        overflowX="clip"
        p="6vw"
        fontFamily={fontFooter}
      >
        <OrangeOverlayBoxMini />
        <IconsTextsMini
          position="relative"
          color="transparent"
          bg={colorPrimary}
        />

        <OrangeOverlayBoxMini />
        <IconsTextsMini
          position="absolute"
          top="6vw"
          color={colorFooter}
          bg="transparent"
        />
      </Box>
      <Copyright />
    </VStack>
  );
};

export default FooterMini;
