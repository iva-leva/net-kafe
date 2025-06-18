import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Box, Icon, Text } from "@chakra-ui/react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { goTo } from "@/constants/texts";

const TextGoToGoogleMap = () => {
  const { lang } = useContext(LangContext);
  return (
    <Box>
      <Text display="inline">{goTo[lang]}</Text>
      <Text display="inline" color={"blue"}>
        G
      </Text>
      <Text display="inline" color={"red"}>
        o
      </Text>
      <Text display="inline" color={"gold"}>
        o
      </Text>
      <Text display="inline" color={"blue"}>
        g
      </Text>
      <Text display="inline" color={"green"}>
        l
      </Text>
      <Text display="inline" color={"red"}>
        e
      </Text>
      <Text display="inline"> Map</Text>
      <Icon
        as={BsBoxArrowUpRight}
        position="relative"
        top="-0.2vw"
        transform={"scale(1.1 , 1.1)"}
        mx="2vw"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.3 , 1.3)" }}
      />
    </Box>
  );
};

export default TextGoToGoogleMap;
