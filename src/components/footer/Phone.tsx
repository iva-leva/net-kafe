import { HStack, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";

const Phone = () => {
  const isMiniScreen = useBreakpointValue({ base: true, sm: false });
  return (
    <>
      {!isMiniScreen && (
        <HStack>
          <Icon as={BsTelephoneFill} transform={"scale(1.2 , 1.2)"} />
          <Text>+351 289 572 669</Text>
        </HStack>
      )}
      {isMiniScreen && (
        <HStack p="2vw">
          <Icon as={BsTelephoneFill} transform={"scale(1.2 , 1.2)"} />
          <Text px="0.5vw" fontSize="7vw" fontWeight="600" lineHeight="1.5">
            +351 289 572 669
          </Text>
        </HStack>
      )}
    </>
  );
};

export default Phone;
