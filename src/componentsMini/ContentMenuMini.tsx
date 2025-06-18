import { Navigate, useParams } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import PictureMenuMini from "./menu/PictureMenuMini";
import { colorSecondary } from "@/constants/colors";
import { scrollToTop } from "@/components/footer/ScrollUp";
import { picturesEn } from "@/constants/menuPictureMiniEn";

interface Props {
  selectedItemNav?: string;
  handleClickNav: (str: string) => void;
}

const ContentMenu = ({ handleClickNav }: Props) => {
  handleClickNav("Menu");
  scrollToTop();

  const params = useParams();

  const renderMenu: string | boolean | undefined =
    params.id &&
    !Number.isNaN(parseInt(params.id)) &&
    parseInt(params.id) > 0 &&
    parseInt(params.id) <= picturesEn.length;

  const selectedMenu = renderMenu ? parseInt(params.id!) : 1;

  if (params.id && !renderMenu) return <Navigate to="/Menu/1" replace />;

  return (
    <VStack w="100%" pt="61vw" bg={colorSecondary}>
      <PictureMenuMini selectedMenu={selectedMenu} />
    </VStack>
  );
};

export default ContentMenu;
