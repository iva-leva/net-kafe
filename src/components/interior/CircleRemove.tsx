import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { CiCircleRemove } from "react-icons/ci";
import { colorIconHover } from "../../constants/colors";

const CircleRemove = () => {
  const scaleIcon = {
    base: "scale(1.2 , 1.2)",
    sm: "scale(1.4 , 1.4)",
    md: "scale(1.6 , 1.6)",
    lg: "scale(1.8, 1.8)",
  };
  const scaleIconHover = {
    base: "scale(1.4 , 1.4)",
    sm: "scale(1.6 , 1.6)",
    md: "scale(1.8 , 1.8)",
    lg: "scale(2.0, 2.0)",
  };

  return (
    <Link to={`/Interior`}>
      <Center>
        <Icon
          as={CiCircleRemove}
          transform={scaleIcon}
          transition="all 0.3s ease-in-out"
          _hover={{
            cursor: "pointer",
            transform: scaleIconHover,
            color: colorIconHover,
          }}
        />
      </Center>
    </Link>
  );
};

export default CircleRemove;
