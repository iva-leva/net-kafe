import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextSportsHangoutMiniEn = () => {
  return (
    <VStack
      position="relative"
      overflow="hidden"
      w="100%"
      overflowY="clip"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxMini />

      <Heading
        pt="3vw"
        px="6vw"
        lineHeight="1.2"
        fontWeight="bold"
        textAlign="center"
        fontSize="9vw"
        fontFamily={fontNice}
      >
        Welcome to Your Ultimate Sports Hangout!
      </Heading>
      <Heading pb="1vw" textAlign="center" size={"3xl"}>
        ⚽🍕🍺
      </Heading>

      <Box
        p="6vw"
        pt="3vw"
        fontSize="5vw"
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

export default TextSportsHangoutMiniEn;
