import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { useParams, Navigate, Link } from "react-router-dom";
import { Box, Center, HStack, Text, Image } from "@chakra-ui/react";
import RenderAll from "./interior/RenderAll";
import RenderImage from "./interior/RenderImage";
import { pictures } from "../constants/interiorPictures360px";
import { sliderPictures } from "../constants/interiorSliderPictures360px";
import { colorPrimary, colorSecondary } from "../constants/colors";
import { zIndexContentInterior, zIndexInterior } from "@/constants/zIndex";
import { scrollToTop } from "./footer/ScrollUp";
import { interiorSlideShow } from "@/constants/texts";
import { fontNice } from "@/constants/fonts";

export const interiorPictures = pictures;

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
  setFooter100: (bool: boolean) => void;
}

const ContentInterior = ({ handleClickNav, setFooter100 }: Props) => {
  handleClickNav("Interior");
  scrollToTop();

  const { lang } = useContext(LangContext);

  const params = useParams();

  const renderImage: string | boolean | undefined =
    params.id &&
    !Number.isNaN(parseInt(params.id)) &&
    parseInt(params.id) > 0 &&
    parseInt(params.id) <= pictures.length;

  const selectedImage = renderImage ? parseInt(params.id!) : -1;

  if (params.id && !renderImage) return <Navigate to="/Interior" replace />;
  if (renderImage && `${selectedImage}` !== params.id)
    return <Navigate to={`/Interior/${selectedImage}`} replace />;

  const widthInterior = renderImage ? "100%" : "80%";
  renderImage ? setFooter100(true) : setFooter100(false);

  return (
    <HStack mt="7vw" bg={colorSecondary}>
      <Box w="100%" bg={colorSecondary}>
        <HStack justifyContent="right">
          <Center
            w={widthInterior}
            position="relative"
            mr="0vw"
            pt="0.7vw"
            bg={colorSecondary}
            data-aos="zoom-out-down"
            zIndex={zIndexContentInterior}
          >
            <Box
              overflowX="clip"
              overflowY="initial"
              paddingTop="1vh"
              paddingBottom="2vh"
              bg={colorSecondary}
            >
              {!renderImage && (
                <Link to={`/Interior/SlideShow`}>
                  <Center
                    fontWeight="600"
                    fontStyle="normal"
                    fontFamily={fontNice}
                    fontSize="3.5vw"
                    lineHeight={1.1}
                    mb="-1vw"
                    color={colorPrimary}
                    transition="all 0.4s ease-in-out"
                    _hover={{
                      cursor: "pointer",
                      transform: "scale(1.05)",
                    }}
                  >
                    <Text>{interiorSlideShow[lang]}</Text>
                  </Center>
                  <HStack
                    minH="3vw"
                    bg={colorSecondary}
                    justifyContent="center"
                    margin="1.6vw"
                    padding="0.2vw"
                    opacity={0.7}
                    borderColor={colorPrimary}
                    borderWidth="0.25vw"
                    borderRadius="0.1vw"
                    boxShadow="0 0 0.1vw 0.1vw red"
                    overflowY="visible"
                    overflowX="clip"
                    zIndex={zIndexInterior}
                  >
                    {sliderPictures.map((sliderPicture, indexSliderPicture) => (
                      <Image
                        marginX={"-0.305vw"}
                        key={indexSliderPicture}
                        src={sliderPicture}
                        height={"3.6vw"}
                        borderRadius={"0.2vw"}
                        opacity="90%"
                        transition="all 0.5s ease-in-out"
                        _hover={{
                          opacity: "100%",
                          cursor: "pointer",
                          transform: "scale(1.3)",
                          borderRadius: "0.4vw",
                          zIndex: zIndexInterior,
                        }}
                      />
                    ))}
                  </HStack>
                </Link>
              )}
              <RenderAll />
              {renderImage && <RenderImage selectedImage={selectedImage} />}
            </Box>
          </Center>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ContentInterior;
