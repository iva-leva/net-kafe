import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";

interface Props {
  menu: any[];
  index: number;
}

const Menu = ({ menu, index }: Props) => {
  return (
    <Center color="goldenrod" data-aos="zoom-out-down">
      <ImageDynamicShadow
        imageScale="scale(0.93 , 0.975)"
        shadowScale="scale(1.0 , 0.995)"
        width="100%"
        src={menu[index]}
        alt="Menu of The Net@Kafé"
      />
    </Center>
  );
};
export default Menu;
