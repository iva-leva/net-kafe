import { Box } from "@chakra-ui/react";
import OrangeOverlayBig from "./OrangeOverlayBig";

const OrangeOverlayBoxBig = () => {
  return (
    <Box overflow={"hidden"}>
      <OrangeOverlayBig top={"0vw"} />
      <OrangeOverlayBig top={"82.316vw"} />
      <OrangeOverlayBig top={"164.632vw"} />
      <OrangeOverlayBig top={"246.948vw"} />
    </Box>
  );
};

export default OrangeOverlayBoxBig;
