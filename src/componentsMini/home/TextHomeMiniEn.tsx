import { Box, Text } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextHomeMiniEn = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxMini />
      <Box
        pt="3vw"
        px="6vw"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize="9vw"
        lineHeight="1.2"
      >
        {/* Discover the Net@Kafé */}
        <Text>Enjoy Food, Drinks & Sports </Text>
        <Text>in the Heart of Albufeira!</Text>
      </Box>
      <Box
        p="6vw"
        pt="3vw"
        fontFamily={fontNormal}
        textAlign="justify"
        fontSize="5vw"
      >
        <Text>
          Welcome to our <b>restaurant and sports bar </b> located right in the{" "}
          <b>center of Albufeira</b> in the heart of Portugal’s stunning{" "}
          <b>Algarve</b> region.{" "}
        </Text>
        <Text>
          Enjoy a <b>beautiful terrace view</b> as you relax with a{" "}
          <b>delicious breakfast</b>, a <b>laid-back lunch</b>, an{" "}
          <b>afternoon coffee</b>, or a cozy <b>dinner</b> with friends. Whether
          you’re here to <b>watch live football and sports</b>, catch up over
          drinks, or simply unwind in a vibrant setting, we’ve got you covered.
        </Text>
        <Text>
          Step inside our stylish interior or choose a shaded outdoor seat —
          either way, you’ll experience <b>friendly service</b>,{" "}
          <b>the coldest beer in town</b>, mouth-watering <b>pizzas</b>, and
          tasty snacks in a warm and welcoming atmosphere.{" "}
        </Text>
        <Text>
          Open daily except Sunday for{" "}
          <b>breakfast, brunch, lunch, dinner, and evening drinks</b> – the
          perfect place to enjoy great food, good vibes, and every big match!
        </Text>
      </Box>
    </Box>
  );
};

export default TextHomeMiniEn;
