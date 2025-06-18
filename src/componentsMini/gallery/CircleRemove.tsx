import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { CiCircleRemove } from "react-icons/ci";
import { colorPrimary, colorSecondaryOp50 } from "../../constants/colors";
import { zIndexChevron } from "@/constants/zIndex";

const CircleRemove = () => {
  const scaleIcon = {
    base: "scale(2.8 , 2.8)",
  };

  return (
    <Link to={`/Gallery`}>
      <Icon
        as={CiCircleRemove}
        position="absolute"
        top="8vw"
        right="21vw"
        zIndex={zIndexChevron}
        color={colorPrimary}
        bg={colorSecondaryOp50}
        borderRadius="50%"
        transform={scaleIcon}
      />
    </Link>
  );
};

export default CircleRemove;
