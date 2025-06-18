import { Box } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";
import { galleryPictures as pictures } from "../ContentGallery";

import { zIndexGalleryImageImage } from "@/constants/zIndex";

interface Props {
  selectedImage: number;
  wPicture: number;
}

const ImageImage = ({ selectedImage, wPicture }: Props) => {
  return (
    <Box
      data-aos="zoom-out-down"
      zIndex={zIndexGalleryImageImage}
      paddingTop={"0.2vw"}
    >
      <ImageDynamicShadow
        imageScale="scale(1 , 1)"
        shadowScale="scale(0.95 , 0.99)"
        width={`${wPicture}vw`}
        height="auto"
        src={pictures[selectedImage - 1]}
      />
    </Box>
  );
};

export default ImageImage;
