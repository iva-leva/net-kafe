import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import OrangeOverlayBoxBig from "../OrangeOverlayBoxBig";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextSportsHangoutEn = () => {
  const fontSizeHeading = useBreakpointValue({
    base: "7vw",
    sm: "1.8rem",
    md: "2rem",
    lg: "4vw",
    xl: "2.4rem",
  });
  const fontSize = useBreakpointValue({
    base: "5vw",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <VStack
      position={"relative"}
      overflow={"hidden"}
      w="100%"
      overflowY={"clip"}
      fontStyle={"normal"}
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxBig />

      <Heading
        pt="2vw"
        px="3vw"
        lineHeight="1.2"
        fontWeight="bold"
        textAlign="center"
        fontSize={fontSizeHeading}
        fontFamily={fontNice}
      >
        Welcome to Your Ultimate Sports Hangout!
      </Heading>
      <Heading pb="1vw" textAlign="center" size={"3xl"}>
        ⚽🍕🍺
      </Heading>

      <Box
        p="3vw"
        pt={0}
        fontSize={fontSize}
        textAlign="justify"
        fontFamily={fontNormal}
      >
        <Text>
          Looking for the perfect spot to catch every thrilling football match,
          enjoy the coldest beer in town, and unwind with friends? You've just
          found it!{" "}
        </Text>
        <Text>
          Whether you're here for <b>breakfast</b>, <b>brunch</b>, <b>lunch</b>,{" "}
          <b>afternoon coffee</b> with dessert and ice cream, <b>dinner</b>, or
          just a <b>great night out</b>, our <b>sports bar and restaurant </b>
          combo has everything you need. Cheer for your team on big screens
          while enjoying crispy snacks, <b>delicious pizzas</b>, and a wide
          range of drinks — from fresh coffee to ice-cold pints. Prefer to relax
          outdoors? Take a seat in our shaded terrace with a beautiful view, or
          soak up the vibrant atmosphere inside our unique and stylish interior.
          Wherever you sit, expect <b>perfect and friendly service</b> that
          makes you feel right at home.
        </Text>
        <Text>
          So gather your crew, bring your appetite, and let’s make every game an
          event to remember!
        </Text>
      </Box>
    </VStack>
  );
};

export default TextSportsHangoutEn;
