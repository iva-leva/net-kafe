import { Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { MdWhatsapp } from "react-icons/md";
import { colorIcon, colorIconHover } from "../../constants/colors";

type Props = {
  color?: string;
};

const WhatsApp = ({ color }: Props) => {
  const mx = useBreakpointValue({
    sm: "0.7vw",
    md: "0.6vw",
  });
  const transform = useBreakpointValue({
    base: "scale(1.9 , 1.9)",
    sm: "scale(1.2, 1.2)",
    md: "scale(1.5 , 1.5)",
    lg: "scale(1.9 , 1.9)",
  });
  const transformHover = useBreakpointValue({
    base: "scale(2.1 , 2.1)",
    sm: "scale(1.3, 1.3)",
    md: "scale(1.6 , 1.6)",
    lg: "scale(2.1 , 2.1)",
  });

  return (
    <Link
      outline={"none"}
      href="https://wa.me/00351289572669?text=
    Our Net@Kafé Restaurant and Snack-Bar welcomes you!
     What can we do for you? 
     O Restaurante e Snack-Bar Net@Kafé dá-lhe as boas-vindas! 
    O que podemos fazer por si?"
      target="_blank"
    >
      <Icon
        as={MdWhatsapp}
        mx={mx}
        transform={transform}
        transition="all 0.3s ease-in-out"
        color={color ? color : colorIcon}
        _hover={{ transform: transformHover, color: colorIconHover }}
      />
    </Link>
  );
};

export default WhatsApp;
