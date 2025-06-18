import { Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { MdOutlineFacebook } from "react-icons/md";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const Facebook = ({ color }: Props) => {
  const mx = useBreakpointValue({
    base: "5vw",
    sm: "-0.5vw",
    md: "0.3vw",
    lg: "0.5vw",
  });

  const transform = useBreakpointValue({
    base: "scale(1.9 , 1.9)",
    sm: "scale(1.2 , 1.2)",
    md: "scale(1.5 , 1.5)",
    lg: "scale(1.9 , 1.9)",
  });

  const transformHover = useBreakpointValue({
    base: "scale(2.1 , 2.1)",
    sm: "scale(1.3 , 1.3)",
    md: "scale(1.6 , 1.6)",
    lg: "scale(2.1 , 2.1)",
  });

  return (
    <Link
      outline={"none"}
      href="https://www.facebook.com/RestauranteBarNK/"
      target="_blank"
    >
      <Icon
        as={MdOutlineFacebook}
        mx={mx}
        transform={transform}
        transition="all 0.3s ease-in-out"
        color={color ? color : colorIcon}
        _hover={{ transform: transformHover, color: colorIconHover }}
      />
    </Link>
  );
};

export default Facebook;
