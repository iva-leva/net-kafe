import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { CiCircleChevLeft } from "react-icons/ci";
import { colorPrimary, colorSecondaryOp50 } from "../../constants/colors";
import { zIndexChevron } from "@/constants/zIndex";

interface Props {
  selectedImage: number;
}

const ChevronLeft = ({ selectedImage }: Props) => {
  const nextImage = selectedImage <= 1 ? selectedImage : selectedImage - 1;
  const isVisible = selectedImage > 1;

  const scaleIcon = {
    base: "scale(2.8, 2.8)",
  };

  return (
    isVisible && (
      <Link to={`/Interior/${nextImage}`}>
        <Icon
          as={CiCircleChevLeft}
          position="absolute"
          top="8vw"
          left="7vw"
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

export default ChevronLeft;
