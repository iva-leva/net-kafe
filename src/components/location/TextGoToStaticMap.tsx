import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { goTo } from "@/constants/texts";

const TextGoToStaticMap = () => {
  const { lang } = useContext(LangContext);
  return (
    <Box>
      <Text display="inline">{goTo[lang]}</Text>
      <Text display="inline" color={"blue"}>
        S
      </Text>
      <Text display="inline" color={"red"}>
        t
      </Text>
      <Text display="inline" color={"gold"}>
        a
      </Text>
      <Text display="inline" color={"blue"}>
        t
      </Text>
      <Text display="inline" color={"green"}>
        i
      </Text>
      <Text display="inline" color={"red"}>
        c
      </Text>
      <Text display="inline"> Map</Text>{" "}
      <Icon
        as={BsArrowRight}
        mr="2vw"
        ml="1.5vw"
        transform={"scale(1.1 , 1.1)"}
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(1.2 , 1.5)" }}
      />
    </Box>
  );
};

export default TextGoToStaticMap;
