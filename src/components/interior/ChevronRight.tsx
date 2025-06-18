import { Link } from "react-router-dom";
import { Center, Icon } from "@chakra-ui/react";
import { CiCircleChevRight } from "react-icons/ci";
import { colorIconHover } from "../../constants/colors";
interface Props {
  selectedImage: number;
  length: number;
}

const ChevronRight = ({ selectedImage, length }: Props) => {
  const nextImage = selectedImage >= length ? selectedImage : selectedImage + 1;
  const isVisible = selectedImage < length;

  const scaleIcon = {
    base: "scale(1.4 , 1.4)",
    sm: "scale(1.9 , 1.9)",
    md: "scale(2.4 , 2.4)",
    lg: "scale(2.9, 2.9)",
  };
  const scaleIconHover = {
    base: "scale(1.6 , 1.6)",
    sm: "scale(2.1 , 2.1)",
    md: "scale(2.6 , 2.6)",
    lg: "scale(3.1, 3.1)",
  };

  return (
    // <Link to={`/Gallery/${nextImage}`}>
    <Link to={`/Interior/${nextImage}`}>
      <Center
        boxSize="5vw"
        // mx="0vw"
      >
        <Icon
          as={CiCircleChevRight}
          transform={scaleIcon}
          transition="all 0.3s ease-in-out"
          _hover={{
            cursor: isVisible ? "pointer" : "default",
            transform: scaleIconHover,
            color: isVisible ? colorIconHover : "transparent",
          }}
        />
      </Center>
    </Link>
  );
};

export default ChevronRight;
