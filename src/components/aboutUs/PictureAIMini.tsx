import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";
import ai from "../../assets/img/ai/ai3.jpg";
import RibbonAboutUsMini from "@/componentsMini/aboutUs/RibbonAboutUsMini";

const PictureAI = () => {
  return (
    <Center mr="0vw" data-aos="zoom-out-down">
      <ImageDynamicShadow
        imageScale="scale(0.93 , 0.93)"
        shadowScale="scale(1, 1)"
        src={ai}
      />
      <RibbonAboutUsMini />
    </Center>
  );
};

export default PictureAI;
