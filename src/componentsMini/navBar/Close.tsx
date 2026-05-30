import { Icon } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const Close = ({ color }: Props) => {
  const mx = "2vw";
  const transform = "scale(2.5, 2.5)";
  const transformHover = "scale(2.9 , 2.9)";

  return (
    <Icon
      as={MdClose}
      mx={mx}
      transform={transform}
      transition="all 0.3s ease-in-out"
      color={color ? color : colorIcon}
      _hover={{ transform: transformHover, color: colorIconHover }}
    />
  );
};

export default Close;
