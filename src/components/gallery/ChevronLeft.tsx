import { Link } from "react-router-dom";
import { Center, Icon } from "@chakra-ui/react";
import { CiCircleChevLeft } from "react-icons/ci";
import { colorIconHover } from "../../constants/colors";
interface Props {
  selectedImage: number;
}

const ChevronLeft = ({ selectedImage }: Props) => {
  const nextImage = selectedImage <= 1 ? selectedImage : selectedImage - 1;
  const isVisible = selectedImage > 1;

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
    <Link to={`/Gallery/${nextImage}`}>
      <Center boxSize="5vw">
        <Icon
          as={CiCircleChevLeft}
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

export default ChevronLeft;
