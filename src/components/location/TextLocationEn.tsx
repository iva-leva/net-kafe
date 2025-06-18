import { Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import OrangeOverlayBox from "../OrangeOverlayBox";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextLocationEn = () => {
  const fontSizeHeading = useBreakpointValue({
    base: "7vw",
    sm: "2.1rem",
    md: "2.3rem",
    lg: "4vw",
    xl: "2.7rem",
  });
  const fontSize = useBreakpointValue({
    base: "5vw",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <Box
      position="relative"
      overflow="hidden"
      mb="-1.3vw"
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBox />
      <Heading
        pt="2vw"
        pb="1vw"
        px="3vw"
        lineHeight="1.2"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize={fontSizeHeading}
      >
        Discover the Net@Kafé
      </Heading>
      <Text
        p="3vw"
        pt={0}
        fontSize={fontSize}
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

export default TextLocationEn;
