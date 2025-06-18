import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";
import netKafe from "../../assets/img/location/NetKafe.jpg";

const PictureRestaurant = () => {
  return (
    <Center data-aos="zoom-out-down">
      <ImageDynamicShadow
        imageScale="scale(0.93 , 0.93)"
        shadowScale="scale(1, 1)"
        src={netKafe}
      />
    </Center>
  );
};

export default PictureRestaurant;
