import {
  zIndexDynamicShadowDown,
  zIndexDynamicShadowUp,
} from "@/constants/zIndex";
import { Box, Image } from "@chakra-ui/react";

type Props = {
  src: string;
  width?: any;
  height?: any;
  alt?: string;
  imageScale?: string;
  shadowScale?: string;
};

const ImageDynamicShadow = ({
  src,
  alt,
  width,
  height,
  imageScale,
  shadowScale,
}: Props) => {
  return (
    <Box position="relative" width={width} height={height}>
      <Image
        position="relative"
        width={width}
        height={height}
        rounded="lg"
        display="block"
        objectFit="cover"
        src={src}
        alt={alt}
        transform={imageScale ? imageScale : "scale(0.9 , 0.9)"}
        zIndex={zIndexDynamicShadowUp}
      />
      <Image
        position="absolute"
        width={width}
        height={height}
        rounded="lg"
        display="block"
        objectFit="cover"
        src={src}
        inset={0}
        filter="blur(0.8vw)"
        transform={shadowScale ? shadowScale : "scale(1 , 1)"}
        zIndex={zIndexDynamicShadowDown}
      />
    </Box>
  );
};

export default ImageDynamicShadow;
