import { HStack, VStack } from "@chakra-ui/react";
import { picturesEn } from "@/constants/menuPictureEn";
import PictureMenu from "./menu/PictureMenu";
import { colorSecondary } from "@/constants/colors";
import { scrollToTop } from "./footer/ScrollUp";
import { Navigate, useParams } from "react-router-dom";

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
    <HStack mt="7vw" bg={colorSecondary} w="100%" justifyContent="right">
      <VStack w="80%" overflowX={"clip"}>
        <PictureMenu selectedMenu={selectedMenu} />
      </VStack>
    </HStack>
  );
};

export default ContentMenu;
