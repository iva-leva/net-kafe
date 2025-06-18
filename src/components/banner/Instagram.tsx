import { Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { SiInstagram } from "react-icons/si";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const Instagram = ({ color }: Props) => {
  const mx = useBreakpointValue({
    base: "5vw",
    sm: "-0.5vw",
    md: "0.3vw",
    lg: "0.5vw",
  });

  const transform = useBreakpointValue({
    base: "scale(1.6 , 1.6)",
    sm: "scale(0.9 , 0.9)",
    md: "scale(1.2 , 1.2)",
    lg: "scale(1.6 , 1.6)",
  });

  const transformHover = useBreakpointValue({
    base: "scale(1.8, 1.8)",
    sm: "scale(1.0 , 1.0)",
    md: "scale(1.3 , 1.3)",
    lg: "scale(1.8 , 1.8)",
  });

  return (
    <Link
      outline={"none"}
      href="https://www.instagram.com/net.kafe/"
      target="_blank"
    >
      <Icon
        as={SiInstagram}
        mr={mx}
        ml="0.6vw"
        transform={transform}
        transition="all 0.3s ease-in-out"
        color={color ? color : colorIcon}
        _hover={{ transform: transformHover, color: colorIconHover }}
      />
    </Link>
  );
};

export default Instagram;
