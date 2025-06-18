import { Box, Image } from "@chakra-ui/react";
import map from "../../assets/img/location/map.jpg";
import { zIndexLocationStaticMap } from "@/constants/zIndex";

const StaticMap = () => {
  return (
    <Box
      w="100%"
      h={{ base: "160vw", sm: "100vw", md: "47.3vw", lg: "47.3vw" }}
      mx={{ base: "6vw", sm: "3vw" }}
      my={{ base: "6vw", sm: "3vw" }}
      objectFit="cover"
      zIndex={zIndexLocationStaticMap}
      // data-aos="zoom-out-up"
    >
      <Image
        w="100%"
        h="100%"
        borderRadius={10}
        objectFit="cover"
        shadow={"xl"}
        src={map}
      />
    </Box>
  );
};

export default StaticMap;
