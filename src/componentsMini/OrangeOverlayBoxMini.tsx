import { Box } from "@chakra-ui/react";
import OrangeOverlayMini from "./OrangeOverlayMini";
import OrangeOverlayMirorMini from "./OrangeOverlayMirorMini";

const OrangeOverlayBoxMini = () => {
  return (
    <Box overflow="hidden">
      <OrangeOverlayMini top={"0vw"} />
      <OrangeOverlayMirorMini top={"102.895vw"} />
      <OrangeOverlayMini top={"205.790vw"} />
      <OrangeOverlayMirorMini top={"308.685vw"} />
      <OrangeOverlayMini top={"411.580vw"} />
      <OrangeOverlayMirorMini top={"514.475vw"} />
    </Box>
  );
};

export default OrangeOverlayBoxMini;
