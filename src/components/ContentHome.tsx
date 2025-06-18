import { useContext } from "react";
import LangContext from "@/contexts/langContext";

import { Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import styles from "./ContentHome.module.css";

import { sliderPictures } from "../constants/homeSliderPictures";
import { sliderMessages } from "../constants/homeSliderMessages";
import { sliderMessagesPt } from "@/constants/homeSliderMessagesPt";

import RibbonIni from "./home/RibbonIni";
import TextHomeEn from "./home/TextHomeEn";
import TextHomePt from "./home/TextHomePt";
import { colorPrimaryOp60, colorSecondary } from "../constants/colors";
import { zIndexRibbonIni } from "@/constants/zIndex";
import { fontNice } from "@/constants/fonts";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentHome = ({ handleClickNav }: Props) => {
  handleClickNav("Home");
  const { lang } = useContext(LangContext);
  return (
    <HStack mt="7vw">
      <Box w="100%">
        <HStack justifyContent="right">
          <Center w="80%" position="relative">
            <Box className={styles["container"]} bg={colorSecondary}>
              <Box className={styles["wrapper"]}>
                <Box>
                  <Center
                    aspectRatio="100/51.25"
                    className={styles["aos"]}
                    data-aos={"zoom-out-down"}
                  >
                    <RibbonIni />
                    <Image
                      className={styles["blurImage"]}
                      rounded="lg"
                      src={sliderPictures[0]}
                    />
                    <Center>
                      <Image
                        className={styles["sharpImage"]}
                        rounded="lg"
                        src={sliderPictures[0]}
                      />
                    </Center>
                  </Center>
                </Box>

                {sliderPictures
                  .filter((pictures, index) => index !== 0 && index <= 13)
                  .map((picture, index) => (
                    <Box
                      position="relative"
                      aspectRatio="100/51.25"
                      key={index}
                    >
                      <Flex
                        position="absolute"
                        top="21vw"
                        right="0"
                        w="80vw"
                        minHeight="7vw"
                        color="white"
                        bg={colorPrimaryOp60}
                        justifyContent="center"
                        alignItems="center"
                        fontSize="4vw"
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
                      </Flex>
                      <Image
                        className={styles["blurImage"]}
                        rounded="lg"
                        src={picture}
                      />
                      <Image
                        className={styles["slideImage"]}
                        rounded="lg"
                        src={picture}
                      />
                    </Box>
                  ))}
                <Box>
                  <Center
                    aspectRatio="100/51.25"
                    className={styles["aos"]}
                    // data-aos="zoom-out-down"
                  >
                    <RibbonIni />
                    <Image
                      className={styles["blurImage"]}
                      rounded="lg"
                      src={sliderPictures[0]}
                    />
                    <Center>
                      <Image
                        className={styles["sharpImage"]}
                        rounded="lg"
                        src={sliderPictures[0]}
                      />
                    </Center>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Center>
        </HStack>

        <HStack justifyContent="right">
          <Center w="80%" position="relative">
            {lang === "En" ? <TextHomeEn /> : <TextHomePt />}
          </Center>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ContentHome;
