import { VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import OpeningHours from "./OpeningHours";
import Address from "./Address";
import Phone from "./Phone";
import WhatsApp from "../banner/WhatsApp";
import Facebook from "../banner/Facebook";
import TripAdvisor from "../banner/TripAdvisor";
import Instagram from "../banner/Instagram";
import ScrollUp from "./ScrollUp";

type Props = {
  position?: any;
  top?: any;
  color?: string;
  bg?: string;
  footer100: boolean;
};

const IconsTexts = ({ position, top, color, bg, footer100 }: Props) => {
  const fontSize = useBreakpointValue({
    base: "6vw",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const lineHeight = useBreakpointValue({
    base: "1.1",
    sm: "1.5",
  });

  return (
    <VStack
      w="100%"
      position={position}
      top={top ? top : null}
      left={0}
      right={0}
      p="3vw"
      borderRadius="lg"
      // data-aos="zoom-out-down"
      fontWeight="normal"
      fontStyle="italic"
      fontSize={fontSize}
      lineHeight={lineHeight}
      justifyContent="center"
      color={color}
      bg={bg}
    >
      <OpeningHours />
      <Address />
      <Phone />

      <HStack position="relative" pt="3vw" lineHeight="1.5">
        <WhatsApp color={color ? color : ""} />
        <Facebook color={color ? color : ""} />
        <Instagram color={color ? color : ""} />
        <TripAdvisor color={color ? color : ""} />
        <ScrollUp footer100={footer100} />
      </HStack>
    </VStack>
  );
};

export default IconsTexts;
