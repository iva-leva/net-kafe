import { Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { SiTripadvisor } from "react-icons/si";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const TripAdvisor = ({ color }: Props) => {
  const mx = useBreakpointValue({
    sm: "0.7vw",
    md: "0.95vw",
  });
  const transform = useBreakpointValue({
    base: "scale(1.9 , 1.9)",
    sm: "scale(1.2 , 1.2)",
    md: "scale(1.5 , 1.5)",
    lg: "scale(1.9 , 1.9)",
  });

  const transformHover = useBreakpointValue({
    base: "scale(2.1 , 2.1)",
    sm: "scale(1.3, 1.3)",
    md: "scale(1.7 , 1.7)",
    lg: "scale(2.1 , 2.1)",
  });

  return (
    <Link
      outline={"none"}
      href="https://www.tripadvisor.co.uk/Restaurant_Review-g189112-d3833969-Reviews-Netkafe-Albufeira_Faro_District_Algarve.html"
      target="_blank"
    >
      <Icon
        as={SiTripadvisor}
        mx={mx}
        transform={transform}
        transition="all 0.3s ease-in-out"
        color={color ? color : colorIcon}
        _hover={{ transform: transformHover, color: colorIconHover }}
      />
    </Link>
  );
};

export default TripAdvisor;
