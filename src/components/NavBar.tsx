import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Link } from "react-router-dom";
import {
  Box,
  Center,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/img/Logo/logoLightRed.png";
import {
  colorButton,
  colorButtonActive,
  colorButtonBg,
  colorButtonHover,
  colorButtonHoverBg,
  colorSecondary,
} from "../constants/colors";
import OrangeOverlayBox from "./OrangeOverlayBox";
import { zIndexNavBar } from "@/constants/zIndex";
import { navBarItems, navBarItemsPt } from "@/constants/texts";
import { fontNormal } from "@/constants/fonts";

interface Props {
  selectedItemNav: string;
  handleClickNav: (str: string) => void;
}

const NavBar = ({ selectedItemNav, handleClickNav }: Props) => {
  const { lang } = useContext(LangContext);

  const px = { base: "1.1rem", sm: "0.2rem", md: "0.8rem", lg: "1rem" };
  const mx = {
    base: "0.3rem",
    sm: "0.10rem",
    md: "0.25rem",
    lg: "0.3rem",
  };

  const width = useBreakpointValue({
    base: "17vw",
    sm: "17vw",
    md: "16vw",
    lg: "15vw",
  });

  const fontSize = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const boxShadowHover =
    "0px 0px 1px 1px rgba(255, 206, 127, 0.5) inset, 0px 0px 5px 3px rgb(255, 206, 127)";
  const boxShadow =
    "0px 0px 0px 1px rgba(255, 206, 127, 0.5) inset, 0px 0px 1px 1px rgb(255, 206, 127)";

  return (
    <VStack
      position="fixed"
      top="0"
      left="0"
      w="20vw"
      h="100%"
      flexWrap="nowrap"
      fontWeight="600"
      fontStyle="normal"
      fontFamily={fontNormal}
      fontSize={fontSize}
      bg={colorSecondary}
    >
      <OrangeOverlayBox />
      <Center h="7vw" w="20vw" />
      <Image src={logo} w="10vw" mt="0.5vw" mb="1vw" />

      <VStack>
        {navBarItems.map((item, index) => (
          <Box key={index} w="100%" zIndex={zIndexNavBar}>
            <Link to={item}>
              <Center
                w={width}
                px={px}
                mx={mx}
                my="0.1rem"
                borderTopLeftRadius="2rem"
                borderTopRightRadius="0rem"
                borderBottomRightRadius="2rem"
                borderBottomLeftRadius="0rem"
                boxShadow={boxShadow}
                color={
                  selectedItemNav === item ? colorButtonActive : colorButton
                }
                bg={
                  selectedItemNav === item ? colorButtonHoverBg : colorButtonBg
                }
                fontStyle={selectedItemNav === item ? "bold" : "inherit"}
                onClick={() => {
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
              </Center>
            </Link>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default NavBar;
