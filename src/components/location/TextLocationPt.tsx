import { Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import OrangeOverlayBox from "../OrangeOverlayBox";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextLocationPt = () => {
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
        Descubra o Net@Kafé
      </Heading>
      <Text
        p="3vw"
        pt={0}
        fontSize={fontSize}
        fontFamily={fontNormal}
        textAlign="justify"
      >
        Localizado no primeiro andar do complexo comercial Bella Vista, no
        centro de Albufeira, o nosso <b>restaurante e bar desportivo</b> oferece
        belas vistas a partir do terraço. Seja para o{" "}
        <b>pequeno-almoço, almoço, café ou jantar</b>, desfrute da{" "}
        <b>cerveja mais gelada</b>, <b>pizzas deliciosas</b> e{" "}
        <b>esportes ao vivo</b>
        num ambiente acolhedor. O local perfeito para uma ótima refeição,
        bebidas e assistir a todos os grandes jogos!
      </Text>
    </Box>
  );
};

export default TextLocationPt;
