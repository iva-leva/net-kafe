import { Icon } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const Vegeburger = ({ color }: Props) => {
  const mx = "2vw";
  const transform = "scale(4, 4)";
  const transformHover = "scale(4.5, 4.5)";

  return (
    <Icon
      as={MdMenu}
      mx={mx}
      w="12px"
      transform={transform}
      transition="all 0.3s ease-in-out"
      color={color ? color : colorIcon}
      _hover={{ transform: transformHover, color: colorIconHover }}
    />
  );
};

export default Vegeburger;
