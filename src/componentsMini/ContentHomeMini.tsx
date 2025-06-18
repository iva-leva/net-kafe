import { useContext } from "react";
import LangContext from "@/contexts/langContext";

import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";
import styles from "../componentsMini/ContentHomeMini.module.css";

import { sliderPictures } from "../constants/homeSliderPicturesMini";
import { sliderMessages } from "../constants/homeSliderMessagesMini";
import { sliderMessagesPt } from "../constants/homeSliderMessagesMiniPt";

import RibbonIniMini from "./home/RibbonIniMini";
import { colorPrimaryOp60, colorSecondary } from "../constants/colors";
import { zIndexRibbonIni } from "@/constants/zIndex";
import TextHomeMiniEn from "./home/TextHomeMiniEn";
import TextHomeMiniPt from "./home/TextHomeMiniPt";
import { fontNice } from "@/constants/fonts";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentHomeMini = ({ handleClickNav }: Props) => {
  handleClickNav("Home");
  const { lang } = useContext(LangContext);

  return (
    <>
      <VStack w="100%" position="relative" pt="57vw" bg={colorSecondary}>
        <Box className={styles["containerMini"]} bg={colorSecondary}>
          <Box className={styles["wrapperMini"]}>
            <Box>
              <Center
                aspectRatio="100/62.5"
                className={styles["aosMini"]}
                data-aos=""
              >
                <RibbonIniMini />
                <Image
                  className={styles["blurImageMini"]}
                  rounded="lg"
                  src={sliderPictures[0]}
                />
                <Center>
                  <Image
                    className={styles["sharpImageMini"]}
                    rounded="lg"
                    src={sliderPictures[0]}
                  />
                </Center>
              </Center>
            </Box>

            {sliderPictures
              .filter((pictures, index) => index !== 0 && index <= 13)
              .map((picture, index) => (
                <Box position="relative" aspectRatio="100/62.5" key={index}>
                  <Flex
                    position="absolute"
                    top="35vw"
                    right="0"
                    w="100vw"
                    minHeight="13vw"
                    color="white"
                    bg={colorPrimaryOp60}
                    justifyContent="center"
                    alignItems="center"
                    fontSize="6.5vw"
                    fontFamily={fontNice}
                    fontStyle="normal"
                    fontWeight="bold"
                    zIndex={zIndexRibbonIni}
                  >
                    <Text>
                      {lang === "En"
                        ? sliderMessages[index + 1]
                        : sliderMessagesPt[index + 1]}
                    </Text>

                    {/* <Text>{sliderMessages[index + 1]}</Text> */}
                  </Flex>
                  <Image
                    className={styles["blurImageMini"]}
                    rounded="lg"
                    src={picture}
                  />
                  <Image
                    className={styles["slideImageMini"]}
                    rounded="lg"
                    src={picture}
                  />
                </Box>
              ))}
            <Box>
              <Center
                aspectRatio="100/62.5"
                className={styles["aosMini"]}
                // data-aos="zoom-out-down"
              >
                <RibbonIniMini />
                <Image
                  className={styles["blurImageMini"]}
                  rounded="lg"
                  src={sliderPictures[0]}
                />
                <Center>
                  <Image
                    className={styles["sharpImageMini"]}
                    rounded="lg"
                    src={sliderPictures[0]}
                  />
                </Center>
              </Center>
            </Box>
          </Box>
        </Box>
      </VStack>

      <Center position="relative" w="100%" justifyContent="right">
        {lang === "En" ? <TextHomeMiniEn /> : <TextHomeMiniPt />}
      </Center>
    </>
  );
};

export default ContentHomeMini;
