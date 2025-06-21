import { useParams, Navigate } from "react-router-dom";
import { Box, Center, HStack } from "@chakra-ui/react";
import RenderAll from "./gallery/RenderAll";
import RenderImage from "./gallery/RenderImage";
import { pictures } from "../constants/galleryPictures";
import { colorSecondary } from "../constants/colors";
import { zIndexContentGallery } from "@/constants/zIndex";
import { scrollToTop } from "./footer/ScrollUp";

export const galleryPictures = pictures;

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
  setFooter100: (bool: boolean) => void;
}

const ContentGallery = ({ handleClickNav, setFooter100 }: Props) => {
  scrollToTop();
  handleClickNav("Gallery");

  const params = useParams();

  const renderImage: string | boolean | undefined =
    params.id &&
    !Number.isNaN(parseInt(params.id)) &&
    parseInt(params.id) > 0 &&
    parseInt(params.id) <= pictures.length;

  const selectedImage = renderImage ? parseInt(params.id!) : -1;

  if (params.id && !renderImage) return <Navigate to="/Gallery" replace />;
  if (renderImage && `${selectedImage}` !== params.id)
    return <Navigate to={`/Gallery/${selectedImage}`} replace />;

  const widthGallery = renderImage ? "100%" : "80%";
  renderImage ? setFooter100(true) : setFooter100(false);

  return (
    <HStack mt="7vw" bg={colorSecondary}>
      <Box w="100%" bg={colorSecondary}>
        <HStack justifyContent="right">
          <Center
            w={widthGallery}
            position={"relative"}
            mr="0vw"
            pt="0.7vw"
            bg={colorSecondary}
            data-aos="zoom-out-down"
            zIndex={zIndexContentGallery}
          >
            <Box
              position="relative"
              overflowX="clip"
              overflowY="initial"
              pt="0.5vh"
              pb="2vh"
              bg={colorSecondary}
            >
              <RenderAll />
              {renderImage && <RenderImage selectedImage={selectedImage} />}
            </Box>
          </Center>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ContentGallery;
