import { Box } from "@chakra-ui/react";
import OrangeOverlay from "./OrangeOverlay";
import OrangeOverlayMiror from "./OrangeOverlayMiror";

const OrangeOverlayBox = () => {
  return (
    <Box overflow={"hidden"}>
      <OrangeOverlay top={"0vw"} />
      <OrangeOverlayMiror top={"20.579vw"} />
      <OrangeOverlay top={"41.158vw"} />
      <OrangeOverlayMiror top={"61.737vw"} />
      <OrangeOverlay top={"82.316vw"} />
      <OrangeOverlayMiror top={"102.895vw"} />
    </Box>
  );
};

export default OrangeOverlayBox;
