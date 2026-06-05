import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Link } from "react-router-dom";

import {
  HStack,
  Text,
  Image,
  Box,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import logo from "../assets/img/logo/logoWhite.png";
import TripAdvisor from "./banner/TripAdvisor";
import Facebook from "./banner/Facebook";
import WhatsApp from "./banner/WhatsApp";
import Instagram from "./banner/Instagram";
import gb from "../assets/flags/gb.svg";
import pt from "../assets/flags/pt.svg";
import { liveSports, restaurant, snackBar } from "./../constants/texts";
import { colorPrimary } from "../constants/colors";
import { zIndexBanner } from "@/constants/zIndex";
import { fontNormal } from "@/constants/fonts";

const Banner = () => {
  const { lang, setLang } = useContext(LangContext);

  const left = useBreakpointValue({
    sm: "1vw",
    md: "2vw",
  });
  const right = useBreakpointValue({
    sm: "5vw",
    md: "4vw",
  });
  // const transformHoverLogo = useBreakpointValue({
  //   base: "scale(1.03 , 1.03)",
  // sm: "scale(1.05 , 1.05)",
  // md: "scale(1.05 , 1.05)",
  // lg: "scale(1.05 , 1.05)",
  // });
  // const transformHoverLogoText = useBreakpointValue({
  //   base: "scale(1.02 , 1.04)",
  // sm: "scale(1.05 , 1.05)",
  // md: "scale(1.05 , 1.05)",
  // lg: "scale(1.05 , 1.05)",
  // });
  const transformHoverText = useBreakpointValue({
    base: "scale(1.03 , 1.09)",
    // sm: "scale(1.05 , 1.05)",
    // md: "scale(1.05 , 1.05)",
    // lg: "scale(1.05 , 1.05)",
  });
  const isBigScreen = useBreakpointValue({ base: false, sm: true });
  const flagShadow = "0px 0px 0px 0px rgba(127, 127, 127, 0.5)";
  const flagShadowActive = "0px 0px 5px 2px rgb(255, 206, 127)";

  return (
    <Box position="relative" zIndex={zIndexBanner}>
      <Box position="fixed" top={0} left={0} boxShadow={"0 0 0.5rem black"}>
        <HStack top="0" left="0" justifyContent="center" bg={colorPrimary}>
          <Center w="100vw" minH="7vw">
            <Center
            // transition="all 300ms ease-in-out"
            // _hover={{
            //   transform: transformHoverLogo,
            //   transformOrigin: "66% 50%",
            // }}
            >
              <Link to="Home">
                <Image w="7vw" src={logo} ml="8vw" mr="1vw" />
              </Link>
            </Center>
            <HStack
              fontSize="2.9vw"
              fontWeight="bold"
              fontFamily={fontNormal}
              fontStyle="italic"
            >
              <Center
              // transition="all 300ms ease-in-out"
              // transform="scale(1.0 , 1.0)"
              // _hover={{
              //   transform: transformHoverLogoText,
              // }}
              >
                <Link to="Home">
                  <Text mr="3vw" color="white">
                    Net@Kafé
                  </Text>
                </Link>
              </Center>
              <HStack fontSize="1.6vw" fontStyle="normal">
                <Center
                  transition="all 300ms ease-in-out"
                  _hover={{
                    transform: transformHoverText,
                    // cursor: "pointer",
                  }}
                >
                  <Link to="Gallery">
                    <Text mx="0.5vw" color="papayawhip">
                      {snackBar[lang]}
                    </Text>
                  </Link>
                </Center>
                <Center
                  transition="all 300ms ease-in-out"
                  _hover={{
                    transform: transformHoverText,
                    // cursor: "pointer",
                  }}
                >
                  <Link to="Interior">
                    <Text mx="0.5vw" color="#fff59b">
                      {restaurant[lang]}
                    </Text>
                  </Link>
                </Center>
                <Center
                  transition="all 300ms ease-in-out"
                  _hover={{
                    transform: transformHoverText,
                    // cursor: "pointer",
                  }}
                >
                  <Link to="About Us">
                    <Text mx="0.5vw" color="lightgreen">
                      ⚽{liveSports[lang]}
                    </Text>
                  </Link>
                </Center>
              </HStack>
            </HStack>
          </Center>

          {isBigScreen && (
            <HStack
              position="absolute"
              left={left}
              w="15vw"
              justifyContent="space-between"
            >
              <WhatsApp />
              <Facebook />
              <Instagram />
              <TripAdvisor />
            </HStack>
          )}

          {isBigScreen && (
            <HStack
              position="absolute"
              right={right}
              w="6.5vw"
              justifyContent="space-between"
            >
              <Image
                src={gb}
                w="2.6vw"
                transition="all 0.3s ease-in-out"
                boxShadow={lang === "En" ? flagShadowActive : flagShadow}
                _hover={{ cursor: "pointer", transform: "scale(1.15, 1.15)" }}
                onClick={() => {
                  setLang("En");
                  localStorage.setItem("language", "En");
                }}
              />
              <Image
                src={pt}
                w="2.8vw"
                transition="all 0.3s ease-in-out"
                boxShadow={lang === "En" ? flagShadow : flagShadowActive}
                _hover={{ cursor: "pointer", transform: "scale(1.15, 1.15)" }}
                onClick={() => {
                  setLang("Pt");
                  localStorage.setItem("language", "Pt");
                }}
              />
            </HStack>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default Banner;
