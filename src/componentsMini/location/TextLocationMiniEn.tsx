import { Box, Text, Heading } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextLocationMiniEn = () => {
  return (
    <Box
      position="relative"
      overflow={"hidden"}
      mb={"-1.3vw"}
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBoxMini />
      <Heading
        pt="3vw"
        px="6vw"
        lineHeight="1.2"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize="9vw"
      >
        Discover the Net@Kafé
      </Heading>
      <Text
        p="6vw"
        pt="3vw"
        fontSize="5vw"
        fontFamily={fontNormal}
        textAlign="justify"
      >
        Located on the first floor of Bella Vista shopping complex, in the
        center of Albufeira, our <b>restaurant and sports bar</b> offers
        beautiful views from the terrace. Whether you're here for{" "}
        <b>breakfast, lunch, coffee, or dinner</b>, enjoy the{" "}
        <b>coldest beer</b>, <b>delicious pizzas</b>, and <b>live sports</b> in
        a friendly atmosphere. Perfect spot for a great meal, drinks, and
        catching every big game!
      </Text>
    </Box>
  );
};

export default TextLocationMiniEn;
