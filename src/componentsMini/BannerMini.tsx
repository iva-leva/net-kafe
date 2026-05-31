import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Link } from "react-router-dom";
import { HStack, Text, Image, Box, Center, VStack } from "@chakra-ui/react";
import RibbonBannerMini from "./banner/RibbonBannerMini";
import logo from "../assets/img/logo/logoWhite.png";
import {
  colorPrimary,
  colorSecondary,
  colorTerciary,
} from "../constants/colors";
import { zIndexBanner } from "@/constants/zIndex";
import { liveSports, restaurant, snackBar } from "@/constants/texts";
import { scrollToTop } from "@/components/footer/ScrollUp";
import { fontNormal } from "@/constants/fonts";

interface Props {
  handleClickOpenNavBar: () => void;
}

const BannerMini = ({ handleClickOpenNavBar }: Props) => {
  const { lang } = useContext(LangContext);
  return (
    <Box position={"relative"} bg={colorSecondary} zIndex={zIndexBanner}>
      <VStack position="fixed" top={0} left={0}>
        <RibbonBannerMini />
        <Center w="100vw" bg={colorPrimary}>
          <HStack
            w="100vw"
            m="3vw"
            mt="18vw"
            fontSize="9vw"
            fontFamily={fontNormal}
            fontStyle="italic"
            fontWeight="bold"
            color="white"
            justifyContent="left"
          >
            <Link to="Home">
              <VStack ml="7vw">
                <Image w="25vw" src={logo} />
              </VStack>
            </Link>
            {/* <Link to="Home"> */}
            <Text
              onClick={() => {
                scrollToTop();
                handleClickOpenNavBar();
              }}
            >
              Net@Kafé
            </Text>
            {/* </Link> */}
          </HStack>
        </Center>

        <Center
          w="100vw"
          minH="10vw"
          fontSize="4vw"
          fontFamily={fontNormal}
          fontWeight="bold"
          bg={colorPrimary}
        >
          <Link to="Gallery">
            <Text mx="2vw" color={colorSecondary}>
              {snackBar[lang]}
            </Text>
          </Link>
          <Link to="Interior">
            <Text mx="2vw" color={colorTerciary}>
              {restaurant[lang]}
            </Text>
          </Link>
          <Link to="About Us">
            <Text mx="2vw" color="lightgreen">
              ⚽{liveSports[lang]}
            </Text>
          </Link>
        </Center>
      </VStack>
    </Box>
  );
};

export default BannerMini;
