import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { CiCircleChevLeft } from "react-icons/ci";
import {
  colorIconHover,
  colorPrimary,
  colorSecondaryOp50,
} from "../../constants/colors";
import { zIndexChevron } from "@/constants/zIndex";

interface Props {
  selectedMenu: number;
}

const ChevronLeft = ({ selectedMenu }: Props) => {
  const nextImage = selectedMenu <= 1 ? selectedMenu : selectedMenu - 1;
  const isVisible = selectedMenu > 1;

  const scaleIcon = {
    base: "scale(2.8, 2.8)",
    sm: "scale(2.2, 2.2)",
    md: "scale(2.4, 2.4)",
    lg: "scale(2.6, 2.6)",
  };

  const scaleIconHover = {
    base: "scale(3, 3)",
    sm: "scale(2.4 , 2.4)",
    md: "scale(2.6 , 2.6)",
    lg: "scale(2.8, 2.8)",
  };

  return (
    isVisible && (
      <Link to={`/Menu/${nextImage}`}>
        <Icon
          as={CiCircleChevLeft}
          position="absolute"
          top="7vw"
          left="2vw"
          zIndex={zIndexChevron}
          color={colorPrimary}
          bg={colorSecondaryOp50}
          borderRadius="50%"
          transform={scaleIcon}
          transition="all 0.3s ease-in-out"
          _hover={{
            cursor: isVisible ? "pointer" : "default",
            transform: scaleIconHover,
            color: isVisible ? colorIconHover : "transparent",
          }}
        />
      </Link>
    )
  );
};

export default ChevronLeft;
