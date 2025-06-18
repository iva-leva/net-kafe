import { VStack, HStack, useBreakpointValue } from "@chakra-ui/react";

import OpeningHours from "../../components/footer/OpeningHours";
import Address from "../../components/footer/Address";
import Phone from "../../components/footer/Phone";
import WhatsApp from "../../components/banner/WhatsApp";
import Facebook from "../../components/banner/Facebook";
import TripAdvisor from "../../components/banner/TripAdvisor";
import Instagram from "../../components/banner/Instagram";
// import ScrollUp from "@/components/footer/ScrollUp";
import ScrollUp from "../../components/footer/ScrollUp";

type Props = {
  position?: any;
  top?: any;
  color?: string;
  bg?: string;
};

const IconsTextsMini = ({ position, top, color, bg }: Props) => {
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
      position={position}
      top={top ? top : null}
      left={0}
      right={0}
      p="3vw"
      pt="6vw"
      pb="12vw"
      borderRadius={"lg"}
      // data-aos="zoom-out-down"
      fontWeight="normal"
      fontStyle={"italic"}
      fontSize={fontSize}
      lineHeight={lineHeight}
      justifyContent="center"
      color={color}
      bg={bg}
    >
      <OpeningHours />
      <Address />
      <Phone />

      <HStack position="relative" pt="3vw" pb="17vw" lineHeight="1.5">
        <WhatsApp color={color ? color : ""} />
        <Facebook color={color ? color : ""} />
        <Instagram color={color ? color : ""} />
        <TripAdvisor color={color ? color : ""} />
        <ScrollUp />
      </HStack>
    </VStack>
  );
};

export default IconsTextsMini;
