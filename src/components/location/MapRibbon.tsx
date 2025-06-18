import { Box, Flex } from "@chakra-ui/react";

import TextGoToGoogleMap from "./TextGoToGoogleMap";
import TextGoToStaticMap from "./TextGoToStaticMap";
import {
  colorMap,
  colorSecondaryOp50,
  colorSecondaryOp70,
} from "../../constants/colors";
import { zIndexLocationMapRibbon } from "@/constants/zIndex";

interface Props {
  handleClick: () => void;
  liveGoogleMap: boolean;
}

const MapRibbon = ({ handleClick, liveGoogleMap }: Props) => {
  const fontSize = { base: "6vw", sm: "lg", md: "xl", lg: "xl" };
  const top = { base: "35vw", sm: "75vw", md: "31vw", lg: "34vw" };
  const h = { base: "15vw", sm: "5vw" };
  const colorMapRibbonBg = {
    base: "rgba(255, 255, 255, 0.7)",
    sm: "rgba(255, 255, 255, 0.5)",
  };
  const colorMapRibbonBgHover = {
    base: colorSecondaryOp70,
    sm: colorSecondaryOp50,
  };

  return (
    <Flex
      position="absolute"
      zIndex={zIndexLocationMapRibbon}
      top={top}
      w="100%"
      h={h}
      pr="2vw"
      justifyContent={"right"}
      alignItems={"center"}
      bg={colorMapRibbonBg}
      onClick={handleClick}
      transition="all 0.3s ease-in-out"
      _hover={{
        cursor: "pointer",
        bg: colorMapRibbonBgHover,
      }}
    >
      <Box
        w="vw"
        p="2vw"
        textAlign="right"
        fontFamily={"maps"}
        fontStyle={"italic"}
        fontWeight={"semibold"}
        fontSize={fontSize}
        color={colorMap}
      >
        {!liveGoogleMap && <TextGoToGoogleMap />}
        {liveGoogleMap && <TextGoToStaticMap />}
      </Box>
    </Flex>
  );
};

export default MapRibbon;
