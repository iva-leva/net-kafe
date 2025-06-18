import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { HStack, Image } from "@chakra-ui/react";
import gb from "../../assets/flags/gb.svg";
import pt from "../../assets/flags/pt.svg";
import { colorPrimary } from "@/constants/colors";
import OrangeOverlayBoxMini from "../OrangeOverlayBoxMini";
import { zIndexFlag } from "@/constants/zIndex";

const RibbonBannerMini = () => {
  const { lang, setLang } = useContext(LangContext);

  const flagShadow = "0px 0px 0px 0px rgba(127, 127, 127, 0.5)";
  const flagShadowActive = "0px 0px 5px 2px rgb(255, 206, 127)";

  return (
    <HStack
      position="absolute"
      overflow="hidden"
      top="0vw"
      w="100vw"
      minH="15vw"
      px="6vw"
      pt="3vw"
      pb="3vw"
      justifyContent={"right"}
      bg={colorPrimary}
    >
      <OrangeOverlayBoxMini />
      <OrangeOverlayBoxMini />
      <Image
        zIndex={zIndexFlag}
        src={gb}
        w="9.2vw"
        transition="all 0.3s ease-in-out"
        boxShadow={lang === "En" ? flagShadowActive : flagShadow}
        _hover={{ cursor: "pointer", transform: "scale(1.15, 1.15)" }}
        onClick={() => setLang("En")}
      />
      <Image
        zIndex={zIndexFlag}
        src={pt}
        w="10vw"
        transition="all 0.3s ease-in-out"
        boxShadow={lang === "Pt" ? flagShadowActive : flagShadow}
        _hover={{ cursor: "pointer", transform: "scale(1.15, 1.15)" }}
        onClick={() => setLang("Pt")}
      />
    </HStack>
  );
};

export default RibbonBannerMini;
