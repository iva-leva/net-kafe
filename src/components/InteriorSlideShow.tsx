import { useContext } from "react";
import LangContext from "@/contexts/langContext";

import { Box, Center, HStack, Image } from "@chakra-ui/react";
import styles from "./ContentHome.module.css";

import { sliderPictures } from "../constants/interiorSliderPictures";
import RibbonInterior from "./interior/RibbonInterior";

import TextHomeEn from "./home/TextHomeEn";
import TextHomePt from "./home/TextHomePt";

import { colorSecondary } from "../constants/colors";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const InteriorSlideShow = ({ handleClickNav }: Props) => {
  handleClickNav("Interior");
  const { lang } = useContext(LangContext);

  return (
    <HStack mt="7vw">
      <Box w="100%">
        <HStack justifyContent="right">
          <Center w="80%" position="relative" overflowX={"hidden"}>
            <RibbonInterior />

            <Box className={styles["container"]} bg={colorSecondary}>
              <Box className={styles["wrapper"]}>
                <Box>
                  <Center
                    aspectRatio="100/51.25"
                    className={styles["aos"]}
                    data-aos="zoom-out-down"
                  >
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
                  .filter((pictures, index) => index !== 0)
                  .map((picture, index) => (
                    <Box
                      position="relative"
                      aspectRatio="100/51.25"
                      key={index}
                    >
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

export default InteriorSlideShow;
