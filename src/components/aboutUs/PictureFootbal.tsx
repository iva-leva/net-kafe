import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";
import footbal from "../../assets/img/aboutUs/aiFootball.jpg";

const PictureFootbal = () => {
  return (
    <Center mr="0vw" data-aos="zoom-out-down">
      <ImageDynamicShadow
        imageScale="scale(0.93 , 0.93)"
        shadowScale="scale(1, 1)"
        src={footbal}
      />
    </Center>
  );
};

export default PictureFootbal;
