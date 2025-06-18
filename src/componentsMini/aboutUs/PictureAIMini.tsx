import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "@/components/ImageDynamicShadow";
import ai from "../../assets/img/aboutUs/aiFood.jpg";
import RibbonAboutUsMini from "./RibbonAboutUsMini";

const PictureAIMini = () => {
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

export default PictureAIMini;
