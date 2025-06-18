import { Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { BsArrowUpSquare } from "react-icons/bs";
import { colorIconHover } from "../../constants/colors";

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

type Props = {
  footer100?: boolean;
};

const ScrollUp = ({ footer100 }: Props) => {
  const goUpIconRight = footer100
    ? useBreakpointValue({
        base: "-21vw",
        sm: "-30vw",
        md: "-34vw",
        lg: "-35vw",
        xl: "-36vw",
      })
    : useBreakpointValue({
        base: "-11vw",
        sm: "-20vw",
        md: "-24vw",
        lg: "-25vw",
        xl: "-26vw",
      });

  const positionBottom = useBreakpointValue({
    base: "-4vw",
    sm: "0vw",
  });

  return (
    <Box
      position="absolute"
      bottom={positionBottom}
      right={goUpIconRight}
      onClick={scrollToTop}
    >
      <Icon
        as={BsArrowUpSquare}
        transform={"scale(1.7 , 1.7)"}
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.9)", color: colorIconHover }}
      />
    </Box>
  );
};

export default ScrollUp;
