import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { CiCircleChevRight } from "react-icons/ci";
import { colorPrimary, colorSecondaryOp50 } from "../../constants/colors";
import { zIndexChevron } from "@/constants/zIndex";

interface Props {
  selectedMenu: number;
  length: number;
}

const ChevronRight = ({ selectedMenu, length }: Props) => {
  const nextImage = selectedMenu >= length ? selectedMenu : selectedMenu + 1;
  const isVisible = selectedMenu < length;

  const scaleIcon = {
    base: "scale(2.8, 2.8)",
  };

  return (
    isVisible && (
      <Link to={`/Menu/${nextImage}`}>
        <Icon
          as={CiCircleChevRight}
          position="absolute"
          top="-1vw"
          right="9vw"
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
