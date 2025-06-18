import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import {
  VStack,
  HStack,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdDeck } from "react-icons/md";
import { hours, monday, mondayHours, openingHours } from "@/constants/texts";

const OpeningHours = () => {
  const { lang } = useContext(LangContext);
  const isBigScreen = useBreakpointValue({ base: false, lg: true });
  const isMiddleScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: false,
  });
  const isSmallScreen = useBreakpointValue({
    base: false,
    sm: true,
    md: false,
  });
  const isMiniScreen = useBreakpointValue({ base: true, sm: false });
  return (
    <>
      {isBigScreen && (
        <HStack>
          <Icon as={MdDeck} transform={"scale(1.55 , 1.55)"} />
          <Text px="0.4vw">{openingHours[lang]}</Text>
          <Text>{mondayHours[lang]}</Text>
        </HStack>
      )}

      {(isMiddleScreen || isSmallScreen) && (
        <>
          <HStack>
            <Icon as={MdDeck} transform={"scale(1.55 , 1.55)"} />
            <Text px="0.4vw">{openingHours[lang]}</Text>{" "}
          </HStack>
          <Text>{mondayHours[lang]}</Text>
        </>
      )}

      {isMiniScreen && (
        <VStack p="2vw">
          <HStack>
            <Icon as={MdDeck} transform={"scale(1.55 , 1.55)"} />
            <Text px="0.5vw" fontSize="7vw" fontWeight="600" lineHeight="1.5">
              {openingHours[lang]}
            </Text>
          </HStack>
          <Text>{monday[lang]}</Text>
          <Text>{hours[lang]}</Text>
        </VStack>
      )}
    </>
  );
};

export default OpeningHours;
