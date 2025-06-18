import { useState } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import ImageRibbon from "./ImageRibbon";
import ImageIcons from "./ImageIcons";
import ImageImage from "./ImageImage";
import { colorSecondaryOp70 } from "@/constants/colors";

interface Props {
  selectedImage: number;
}

const RenderImage = ({ selectedImage }: Props) => {
  const [zoomPicture, setZoomPicture] = useState(1);
  const [zoomInEnabled, setZoomInEnabled] = useState(true);
  const [zoomOutEnabled, setZoomOutEnabled] = useState(true);

  let wPicture = useBreakpointValue({ base: 40, sm: 54, md: 61, lg: 66 });
  wPicture = wPicture! * zoomPicture;

  const wMax = 100;
  const wMin = 30;

  wPicture >= wMax ? (wPicture = wMax) : (wPicture = wPicture);
  if (wPicture === wMax && zoomInEnabled) setZoomInEnabled(false);
  if (wPicture < wMax && !zoomInEnabled) setZoomInEnabled(true);

  wPicture <= wMin ? (wPicture = wMin) : (wPicture = wPicture);
  if (wPicture === wMin && zoomOutEnabled) setZoomOutEnabled(false);
  if (wPicture > wMin && !zoomOutEnabled) setZoomOutEnabled(true);

  const handleZoomClick = (zoom: number) => {
    setZoomPicture(zoomPicture * zoom);
  };

  return (
    <Flex
      position="absolute"
      top="0vw"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="start"
      bg={colorSecondaryOp70}
    >
      <ImageRibbon />
      <ImageIcons
        selectedImage={selectedImage}
        zoomInEnabled={zoomInEnabled}
        zoomOutEnabled={zoomOutEnabled}
        handleZoomClick={handleZoomClick}
      />
      <ImageImage selectedImage={selectedImage} wPicture={wPicture} />
    </Flex>
  );
};

export default RenderImage;
