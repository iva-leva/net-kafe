import { useParams, Navigate } from "react-router-dom";
import { Box, Center, HStack } from "@chakra-ui/react";
import RenderAll from "../components/gallery/RenderAll";
import RenderImageMini from "./gallery/RenderImageMini";
import { pictures } from "../constants/galleryPictures";
import { colorSecondary } from "../constants/colors";
import { zIndexContentGallery } from "@/constants/zIndex";
import { scrollToTop } from "../components/footer/ScrollUp";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentGalleryMini = ({ handleClickNav }: Props) => {
  handleClickNav("Gallery");
  scrollToTop();

  const params = useParams();

  const renderImage: string | boolean | undefined =
    params.id &&
    !Number.isNaN(parseInt(params.id)) &&
    parseInt(params.id) > 0 &&
    parseInt(params.id) <= pictures.length;

  const selectedImage = renderImage ? parseInt(params.id!) : -1;

  if (params.id && !renderImage) return <Navigate to="/Gallery" replace />;

  return (
    <HStack pt="54vw" bg={colorSecondary}>
      <Box w="100%" bg={colorSecondary}>
        <HStack>
          <Center
            w="100%"
            mx="1vw"
            my="2vw"
            position={"relative"}
            bg={colorSecondary}
            data-aos="zoom-out-down"
            zIndex={zIndexContentGallery}
          >
            <Box
              position="relative"
              overflowX="clip"
              overflowY="initial"
              bg={colorSecondary}
            >
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

export default ContentGalleryMini;
