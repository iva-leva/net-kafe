import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextSportsHangoutMiniPt = () => {
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
        Bem-vindo ao seu melhor ponto de encontro esportivo!
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

export default TextSportsHangoutMiniPt;
