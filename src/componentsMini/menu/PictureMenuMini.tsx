import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Box } from "@chakra-ui/react";
import ImageDynamicShadow from "../../components/ImageDynamicShadow";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import { picturesEn } from "@/constants/menuPictureMiniEn";
import { picturesPt } from "@/constants/menuPictureMiniPt";

interface Props {
  selectedMenu: number;
}

const PictureMenuMini = ({ selectedMenu }: Props) => {
  const { lang } = useContext(LangContext);
  return (
    <Box data-aos="zoom-out-down">
      <ChevronLeft selectedMenu={selectedMenu} />
      <ChevronRight selectedMenu={selectedMenu} length={picturesEn.length} />
      <ImageDynamicShadow
        imageScale="scale(0.93 , 0.97)"
        shadowScale="scale(1,1)"
        src={
          lang === "En"
            ? picturesEn[selectedMenu - 1]
            : picturesPt[selectedMenu - 1]
        }
      />
    </Box>
  );
};

export default PictureMenuMini;
