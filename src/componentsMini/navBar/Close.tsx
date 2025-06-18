import { Icon, useBreakpointValue } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const Close = ({ color }: Props) => {
  const mx = useBreakpointValue({
    base: "2vw",
    sm: "1.4vw",
    md: "0.3vw",
    lg: "0.5vw",
  });

  const transform = useBreakpointValue({
    base: "scale(2.5, 2.5)",
    md: "scale(1.5 , 1.5)",
    lg: "scale(1.7 , 1.7)",
  });

  const transformHover = useBreakpointValue({
    base: "scale(2.1 , 2.1)",
    md: "scale(1.6 , 1.6)",
    lg: "scale(1.9 , 1.9)",
  });

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
