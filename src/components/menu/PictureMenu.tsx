import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Center } from "@chakra-ui/react";
import ImageDynamicShadow from "../../components/ImageDynamicShadow";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import { picturesEn } from "./../../constants/menuPictureEn";
import { picturesPt } from "./../../constants/menuPicturePt";

interface Props {
  selectedMenu: number;
}

const PictureMenu = ({ selectedMenu }: Props) => {
  const { lang } = useContext(LangContext);
  return (
    <Center data-aos="zoom-out-down">
      <ChevronLeft selectedMenu={selectedMenu} />
      <ChevronRight selectedMenu={selectedMenu} length={picturesEn.length} />
      <ImageDynamicShadow
        imageScale="scale(0.93, 0.94)"
        shadowScale="scale(1, 1)"
        src={
          lang === "En"
            ? picturesEn[selectedMenu - 1]
            : picturesPt[selectedMenu - 1]
        }
      />
    </Center>
  );
};

export default PictureMenu;
