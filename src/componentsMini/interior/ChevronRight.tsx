import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { CiCircleChevRight } from "react-icons/ci";
import { colorPrimary, colorSecondaryOp50 } from "../../constants/colors";
import { zIndexChevron } from "@/constants/zIndex";

interface Props {
  selectedImage: number;
  length: number;
}

const ChevronRight = ({ selectedImage, length }: Props) => {
  const nextImage = selectedImage >= length ? selectedImage : selectedImage + 1;
  const isVisible = selectedImage < length;

  const scaleIcon = {
    base: "scale(2.8, 2.8)",
  };

  return (
    isVisible && (
      <Link to={`/Interior/${nextImage}`}>
        <Icon
          as={CiCircleChevRight}
          position="absolute"
          top="8vw"
          right="7vw"
          zIndex={zIndexChevron}
          color={colorPrimary}
          bg={colorSecondaryOp50}
          borderRadius="50%"
          transform={scaleIcon}
        />
      </Link>
    )
  );
};

export default ChevronRight;
