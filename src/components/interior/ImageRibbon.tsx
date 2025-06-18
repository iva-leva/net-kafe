import { HStack } from "@chakra-ui/react";
import { colorPrimaryOp70 } from "../../constants/colors";
import { zIndexGalleryImageRibbon } from "@/constants/zIndex";

const ImageRibbon = () => {
  return (
    <HStack
      position="absolute"
      top="12vw"
      w="100%"
      h="9vw"
      alignContent={"center"}
      justifyContent="space-between"
      zIndex={zIndexGalleryImageRibbon}
      bg={colorPrimaryOp70}
    />
  );
};

export default ImageRibbon;
