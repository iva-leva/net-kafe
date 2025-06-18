import { Center, Icon } from "@chakra-ui/react";
import { BsZoomIn } from "react-icons/bs";
import { colorIconHover } from "../../constants/colors";

interface Props {
  handleZoomClick: (num: number) => void;
  zoomInEnabled: boolean;
}

const ZoomIn = ({ handleZoomClick, zoomInEnabled }: Props) => {
  const scaleIcon = {
    base: "scale(1.2 , 1.2)",
    sm: "scale(1.3 , 1.3)",
    md: "scale(1.4 , 1.4)",
    lg: "scale(1.5, 1.5)",
  };
  const scaleIconHover = {
    base: "scale(1.4 , 1.4)",
    sm: "scale(1.5 , 1.5)",
    md: "scale(1.6 , 1.6)",
    lg: "scale(1.7, 1.7)",
  };

  return (
    <Center
      boxSize="2vw"
      mx="0.56vw"
      onClick={zoomInEnabled ? () => handleZoomClick(1.1) : undefined}
    >
      <Icon
        as={BsZoomIn}
        transform={scaleIcon}
        transition="all 0.3s ease-in-out"
        _hover={{
          cursor: zoomInEnabled ? "pointer" : "default",
          transform: scaleIconHover,
          color: zoomInEnabled ? colorIconHover : "transparent",
        }}
      />
    </Center>
  );
};

export default ZoomIn;
