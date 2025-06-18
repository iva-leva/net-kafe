import { Box, Text } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextHomeMiniPt = () => {
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
        <Text>Aproveite comida, bebidas e esportes </Text>
        <Text>no coração de Albufeira!</Text>
      </Box>
      <Box
        p="6vw"
        pt="3vw"
        fontFamily={fontNormal}
        textAlign="justify"
        fontSize="5vw"
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

export default TextHomeMiniPt;
