import { Box, Text, Heading } from "@chakra-ui/react";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { colorPrimary, colorSecondary } from "../../constants/colors";
import { fontNice, fontNormal } from "@/constants/fonts";

const TextLocationMiniPt = () => {
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
        Descubra o Net@Kafé
      </Heading>
      <Text
        p="6vw"
        pt="3vw"
        fontSize="5vw"
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

export default TextLocationMiniPt;
