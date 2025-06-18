import { HStack } from "@chakra-ui/react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import CircleRemove from "./CircleRemove";
import ZoomIn from "./ZoomIn";
import ZoomOut from "./ZoomOut";
import Counter from "./Counter";
import { interiorPictures as pictures } from "../ContentInterior";
import { zIndexGalleryImageIcons } from "@/constants/zIndex";

interface Props {
  selectedImage: number;
  zoomInEnabled: boolean;
  zoomOutEnabled: boolean;
  handleZoomClick: (zoom: number) => void;
}

const ImageIcons = ({
  selectedImage,
  zoomInEnabled,
  zoomOutEnabled,
  handleZoomClick,
}: Props) => {
  const mxHStack = { base: "3vw", sm: "3vw", md: "2.5vw", lg: "2vw" };
  // const mxHStack = { base: "2%", sm: "2%", md: "1.5%", lg: "1%" };

  return (
    <HStack
      position="absolute"
      top="12vw"
      w="100%"
      h="9vw"
      bg={"transparent"}
      alignContent={"center"}
      justifyContent="space-between"
      zIndex={zIndexGalleryImageIcons}
      color="white"
    >
      <HStack mx={mxHStack}>
        <ChevronLeft selectedImage={selectedImage} />
        <ZoomIn
          handleZoomClick={handleZoomClick}
          zoomInEnabled={zoomInEnabled}
        />
        <ZoomOut
          handleZoomClick={handleZoomClick}
          zoomOutEnabled={zoomOutEnabled}
        />
      </HStack>
      <HStack mx={mxHStack}>
        <CircleRemove />
        <Counter selectedImage={selectedImage} length={pictures.length} />
        <ChevronRight selectedImage={selectedImage} length={pictures.length} />
      </HStack>
    </HStack>
  );
};

export default ImageIcons;
