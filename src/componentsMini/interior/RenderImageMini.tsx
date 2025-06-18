import { Box } from "@chakra-ui/react";
import { pictures } from "../../constants/interiorPictures";
import ImageDynamicShadow from "@/components/ImageDynamicShadow";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import CircleRemove from "./CircleRemove";
import { zIndexGalleryImageImage } from "@/constants/zIndex";

interface Props {
  selectedImage: number;
}

const RenderImageMini = ({ selectedImage }: Props) => {
  return (
    <Box data-aos="zoom-out-down" zIndex={zIndexGalleryImageImage} p="1vw">
      <ChevronLeft selectedImage={selectedImage} />
      <ChevronRight selectedImage={selectedImage} length={pictures.length} />
      <CircleRemove />
      <ImageDynamicShadow
        imageScale="scale(0.95, 0.95)"
        shadowScale="scale(1.0, 1.0)"
        width="96vw"
        height="auto"
        src={pictures[selectedImage - 1]}
      />
    </Box>
  );
};

export default RenderImageMini;
