import { useContext } from "react";
import LangContext from "@/contexts/langContext";

import { Link } from "react-router-dom";
import { Box, Center, VStack } from "@chakra-ui/react";
import Vegeburger from "./navBar/Vegeburger";
import Close from "./navBar/Close";

import OrangeOverlayBoxMini from "./OrangeOverlayBoxMini";
import {
  colorButton,
  colorButtonActive,
  colorButtonBg,
  colorButtonHover,
  colorButtonHoverBg,
  colorSecondary,
} from "../constants/colors";
import { zIndexNavBar, zIndexVegeburger } from "@/constants/zIndex";
import { scrollToTop } from "@/components/footer/ScrollUp";
import { fontNormal } from "@/constants/fonts";

interface Props {
  selectedItemNav: string;
  handleClickNav: (str: string) => void;
  openNavBar: boolean;
  handleClickOpenNavBar: () => void;
}

const NavBarMini = ({
  selectedItemNav,
  handleClickNav,
  openNavBar,
  handleClickOpenNavBar,
}: Props) => {
  const { lang } = useContext(LangContext);

  const navBarItems = [
    "Home",
    "Menu",
    "Gallery",
    "Interior",
    "Location",
    "About Us",
  ];
  const navBarItemsPt = [
    "Início",
    "Menu",
    "Galeria",
    "Interior",
    "Localização",
    "Sobre nós",
  ];

  const px = "1.1rem";
  const mx = "0.3rem";

  const boxShadowHover =
    "0px 0px 1px 1px rgba(255, 206, 127, 2) inset, 0px 0px 5px 3px rgb(255, 206, 127)";
  const boxShadow =
    "0px 0px 0px 1px rgba(255, 206, 127, 1) inset, 0px 0px 0px 3px rgb(255, 206, 127)";

  return (
    <>
      <Box
        h="7vw"
        w="7vw"
        position={"fixed"}
        top="3vw"
        left="6vw"
        onClick={() => {
          scrollToTop();
          handleClickOpenNavBar();
        }}
        zIndex={zIndexVegeburger}
        _hover={{
          color: "goldenrod",
          bg: "transparent",
          opacity: "90%",
          cursor: "pointer",
          boxShadow: boxShadowHover,
        }}
      >
        {openNavBar ? <Close /> : <Vegeburger />}
      </Box>

      {openNavBar && (
        <VStack
          position={"relative"}
          top="0"
          left="0"
          w="100vw"
          pt="60vw"
          pb="7vw"
          flexWrap="nowrap"
          fontWeight="600"
          fontStyle="normal"
          fontFamily={fontNormal}
          fontSize="7vw"
          overflow="hidden"
          bg={colorSecondary}
        >
          <OrangeOverlayBoxMini />

          <VStack>
            {navBarItems.map((item, index) => (
              <Box key={index} w="100%" zIndex={zIndexNavBar}>
                <Link to={item}>
                  <Center
                    w="85vw"
                    px={px}
                    mx={mx}
                    my="0.2rem"
                    borderTopLeftRadius="2rem"
                    borderTopRightRadius="0rem"
                    borderBottomRightRadius="2rem"
                    borderBottomLeftRadius="0rem"
                    boxShadow={boxShadow}
                    color={
                      selectedItemNav === item ? colorButtonActive : colorButton
                    }
                    bg={
                      selectedItemNav === item
                        ? colorButtonHoverBg
                        : colorButtonBg
                    }
                    fontStyle={selectedItemNav === item ? "bold" : "inherit"}
                    onClick={() => {
                      handleClickOpenNavBar();
                      handleClickNav(item);
                    }}
                    transition="all 300ms ease-in-out"
                    _focus={{ boxShadow: "outline" }}
                    _hover={{
                      color: colorButtonHover,
                      bg: colorButtonHoverBg,
                      opacity: "90%",
                      cursor: "pointer",
                      boxShadow: boxShadowHover,
                    }}
                  >
                    {lang === "En" ? item : navBarItemsPt[index]}
                    {/* {item} */}
                  </Center>
                </Link>
              </Box>
            ))}
          </VStack>
        </VStack>
      )}
    </>
  );
};

export default NavBarMini;
