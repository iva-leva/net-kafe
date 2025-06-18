import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import OrangeOverlayBoxBig from "../OrangeOverlayBoxBig";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextSportsHangoutPt = () => {
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
        Bem-vindo ao seu melhor ponto de encontro esportivo!
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
          Procurando o lugar perfeito para assistir a todos os jogos de futebol
          emocionantes, tomar a cerveja mais gelada da cidade e relaxar com os
          amigos? Você acabou de encontrar!
        </Text>
        <Text>
          Seja para um <b>café da manhã</b>, um <b>brunch</b>, um <b>almoço</b>,
          um café da tarde com sobremesa e sorvete, um <b>jantar</b> ou apenas
          uma <b>excelente noite fora</b>, nossa combinação de{" "}
          <b>bar esportivo e restaurante</b>
          tem tudo o que você precisa. Torça pelo seu time em telões enquanto
          saboreia petiscos crocantes, <b>pizzas deliciosas</b> e uma ampla
          variedade de bebidas — de café fresco a pints gelados. Prefere relaxar
          ao ar livre? Sente-se em nosso terraço sombreado com uma bela vista ou
          absorva a atmosfera vibrante em nosso interior único e elegante. Onde
          quer que você se sente, espere um <b>serviço perfeito e amigável</b>{" "}
          que fará você se sentir em casa.
        </Text>
        <Text>
          Então reúna sua equipe, traga seu apetite e vamos fazer de cada jogo
          um evento inesquecível!
        </Text>
      </Box>
    </VStack>
  );
};

export default TextSportsHangoutPt;
