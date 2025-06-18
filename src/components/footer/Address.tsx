import { useContext } from "react";
import LangContext from "@/contexts/langContext";
import {
  VStack,
  HStack,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { address } from "@/constants/texts";
// import { PiHouseLineFill } from "react-icons/pi";

const Address = () => {
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
          <Icon as={MdLocationOn} transform={"scale(1.5 , 1.5)"} />
          <Text px="0.4vw">
            Avenida dos Descobrimentos, Bellavista Comercial, 8200 - Albufeira,
            Portugal
          </Text>
        </HStack>
      )}

      {isMiddleScreen && (
        <>
          <HStack>
            <Icon as={MdLocationOn} transform={"scale(1.5 , 1.5)"} />
            <Text px="0.4vw">{address[lang]}</Text>
          </HStack>
          <Text>
            Avenida dos Descobrimentos, Bellavista Comercial, 8200 - Albufeira,
            Portugal
          </Text>
        </>
      )}

      {isSmallScreen && (
        <VStack>
          <HStack>
            <Icon as={MdLocationOn} transform={"scale(1.5 , 1.5)"} />
            <Text px="0.4vw">{address[lang]}</Text>
          </HStack>
          <Text>Avenida dos Descobrimentos, </Text>
          <Text>Bellavista Comercial, 8200 - Albufeira, Portugal</Text>
        </VStack>
      )}

      {isMiniScreen && (
        <VStack p="2vw">
          <HStack>
            <Icon as={MdLocationOn} transform={"scale(1.5 , 1.5)"} />
            <Text px="0.5vw" fontSize="7vw" fontWeight="600" lineHeight="1.5">
              {address[lang]}
            </Text>
          </HStack>
          <Text>Avenida dos Descobrimentos</Text>
          <Text>Bellavista Comercial</Text>
          <Text>8200 - Albufeira, Portugal</Text>
        </VStack>
      )}
    </>
  );
};

export default Address;
