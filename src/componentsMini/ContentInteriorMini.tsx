import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Link } from "react-router-dom";
import { Box, Center, HStack, Image } from "@chakra-ui/react";
import RenderAll from "../components/interior/RenderAll";
import { pictures } from "../constants/interiorPictures";
import { sliderPictures } from "../constants/interiorSliderPictures";
import { colorPrimary, colorSecondary } from "../constants/colors";
import { zIndexContentInterior } from "@/constants/zIndex";
import { scrollToTop } from "../components/footer/ScrollUp";
import { interiorSlideShow } from "@/constants/texts";
import { fontNice } from "@/constants/fonts";
import RenderImageMini from "./interior/RenderImageMini";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentInteriorMini = ({ handleClickNav }: Props) => {
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

  return (
    <HStack pt="54vw" bg={colorSecondary}>
      <Box w="100%" bg={colorSecondary}>
        <HStack>
          <Center
            w="100%"
            mx="1vw"
            my="2vw"
            bg={colorSecondary}
            data-aos="zoom-out-down"
            zIndex={zIndexContentInterior}
          >
            <Box overflowX="clip" overflowY="initial" bg={colorSecondary}>
              {" "}
              <Link to={`/Interior/SlideShow`}>
                <Center
                  fontWeight="600"
                  fontStyle="normal"
                  fontFamily={fontNice}
                  fontSize="7vw"
                  lineHeight={1.1}
                  color={colorPrimary}
                >
                  {interiorSlideShow[lang]}
                </Center>
                <HStack
                  minH="3vw"
                  bg={colorSecondary}
                  justifyContent="center"
                  m="1.8vw"
                  p="0.2vw"
                  opacity={0.7}
                  borderColor={colorPrimary}
                  borderWidth="0.25vw"
                  borderRadius="0.1vw"
                  boxShadow="0 0 0.1vw 0.1vw red"
                  overflow="hidden"
                >
                  {sliderPictures.map((sliderPicture, indexSliderPicture) => (
                    <Image
                      marginX={"-0.315vw"}
                      key={indexSliderPicture}
                      src={sliderPicture}
                      height={"3.6vw"}
                      borderRadius={"0.2vw"}
                      opacity="100%"
                      // transition="all 0.4s ease-in-out"
                      // _hover={{
                      //   opacity: "100%",
                      //   cursor: "pointer",
                      //   transform: "scale(1.3)",
                      //   borderRadius: "0.4vw",
                      //   zIndex: 1,
                      // }}
                    />
                  ))}
                </HStack>
              </Link>
              {renderImage ? (
                <RenderImageMini selectedImage={selectedImage} />
              ) : (
                <RenderAll />
              )}
            </Box>
          </Center>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ContentInteriorMini;
