import { Center, Icon } from "@chakra-ui/react";
import { BsZoomOut } from "react-icons/bs";
import { colorIconHover } from "../../constants/colors";

interface Props {
  handleZoomClick: (num: number) => void;
  zoomOutEnabled: boolean;
}

const ZoomOut = ({ handleZoomClick, zoomOutEnabled }: Props) => {
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
      mx="0.16vw"
      onClick={
        zoomOutEnabled ? () => handleZoomClick(0.909090909090909) : undefined
      }
    >
      <Icon
        as={BsZoomOut}
        transform={scaleIcon}
        transition="all 0.3s ease-in-out"
        _hover={{
          cursor: zoomOutEnabled ? "pointer" : "default",
          transform: scaleIconHover,
          color: zoomOutEnabled ? colorIconHover : "transparent",
        }}
      />
    </Center>
  );
};

export default ZoomOut;
