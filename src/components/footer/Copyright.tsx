import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { colorPrimary, colorFooter } from "../../constants/colors";
import { copyright } from "@/constants/texts";

const Copyright = () => {
  const { lang } = useContext(LangContext);
  const fontSize = useBreakpointValue({
    base: "4vw",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg",
  });

  return (
    <Box
      w="100%"
      position="relative"
      fontWeight="semibold"
      fontStyle="italic"
      fontSize={fontSize}
      justifyContent="center"
      textAlign="center"
      color={colorFooter}
      bgColor={colorPrimary}
    >
      <Text h={"5vw"} padding="0.8rem">
        {copyright[lang]} &copy; 2025 Net@Kafé
      </Text>
      <Box color={colorPrimary}>
        <Text>_</Text>
      </Box>
    </Box>
  );
};

export default Copyright;
