import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Box, Center, Image, VStack } from "@chakra-ui/react";
import styles from "../componentsMini/ContentHomeMini.module.css";

import { sliderPictures } from "../constants/interiorSliderPictures";
import { colorSecondary } from "../constants/colors";
import RibbonInteriorMini from "./interior/RibbonInteriorMini";
import TextHomeMiniEn from "./home/TextHomeMiniEn";
import TextHomeMiniPt from "./home/TextHomeMiniPt";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const InteriorSlideShowMini = ({ handleClickNav }: Props) => {
  handleClickNav("Interior");
  const { lang } = useContext(LangContext);
  return (
    <>
      <VStack w="100%" position="relative" pt="57vw" bg={colorSecondary}>
        <RibbonInteriorMini />
        <Box className={styles["containerMini"]} bg={colorSecondary}>
          <Box className={styles["wrapperMini"]}>
            <Box>
              <Center
                aspectRatio="100/62.5"
                className={styles["aosMini"]}
                data-aos="zoom-out-down"
              >
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

export default InteriorSlideShowMini;
