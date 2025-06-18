import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";
import RibbonAboutUs from "@/components/aboutUs/RibbonAboutUs";
import ai from "../../assets/img/aboutUs/aiFood.jpg";

const PictureAI = () => {
  return (
    <Center data-aos="zoom-out-down">
      <ImageDynamicShadow
        imageScale="scale(0.93 , 0.93)"
        shadowScale="scale(1, 1)"
        src={ai}
      />
      <RibbonAboutUs />
    </Center>
  );
};

export default PictureAI;
