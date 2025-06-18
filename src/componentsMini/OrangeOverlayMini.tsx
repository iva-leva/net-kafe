import { Box, Image } from "@chakra-ui/react";
import orange from "../assets/img/orange/orange.jpg";

interface Props {
  top: string;
}
const OrangeOverlayMini = ({ top }: Props) => {
  return (
    <>
      <Image
        position="absolute"
        overflow={"hidden"}
        top={top}
        left="0"
        w="100%"
        opacity="20%"
        filter="blur(0.1rem)"
        objectFit="cover"
        src={orange}
      />
      <Box
        position="absolute"
        top={top}
        left="0"
        w="100%"
        h="102.895vw"
        bg="transparent"
      ></Box>
    </>
  );
};

export default OrangeOverlayMini;
