import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import OrangeOverlayBox from "../OrangeOverlayBox";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextHomePt = () => {
  const fontSizeHeading = useBreakpointValue({
    base: "9vw",
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
      w="100%"
      fontStyle="normal"
      color={colorPrimary}
      bg={colorSecondary}
    >
      <OrangeOverlayBox />
      <Box
        pt="2vw"
        pb="1vw"
        px="3vw"
        lineHeight="1.2"
        fontFamily={fontNice}
        fontWeight="bold"
        textAlign="center"
        fontSize={fontSizeHeading}
      >
        <Text>Aproveite comida, bebidas e esportes </Text>
        <Text>no coração de Albufeira!</Text>
      </Box>
      <Box
        p="3vw"
        pt={0}
        fontSize={fontSize}
        fontFamily={fontNormal}
        textAlign="justify"
      >
        <Text>
          Bem-vindo ao nosso <b>restaurante e bar esportivo</b> localizado bem
          no <b>centro de Albufeira</b>, no coração da deslumbrante região do{" "}
          <b>Algarve</b> de Portugal.
        </Text>
        <Text>
          Desfrute de uma <b>bela vista do terraço</b> enquanto relaxa com um{" "}
          <b>delicioso café da manhã</b>, um <b>almoço descontraído</b>, um{" "}
          <b>café da tarde</b> ou um <b>jantar</b> aconchegante com amigos. Seja
          para <b>assistir futebol e esportes ao vivo</b>, conversar enquanto
          toma uma bebida ou simplesmente relaxar em um ambiente vibrante, temos
          tudo o que você precisa.
        </Text>
        <Text>
          Entre em nosso interior elegante ou escolha um lugar na sombra ao ar
          livre — de qualquer forma, você experimentará um{" "}
          <b>atendimento simpático</b>, <b>a cerveja mais gelada da cidade</b>,{" "}
          <b>pizzas</b> de dar água na boca e lanches saborosos em um ambiente
          acolhedor e acolhedor.{" "}
        </Text>
        <Text>
          Aberto diariamente, exceto domingos para{" "}
          <b>café da manhã, brunch, almoço, jantar e drinks à noite</b> – o
          lugar perfeito para desfrutar de ótima comida, boas vibrações e de
          todas as grandes partidas!
        </Text>
      </Box>
    </Box>
  );
};

export default TextHomePt;
