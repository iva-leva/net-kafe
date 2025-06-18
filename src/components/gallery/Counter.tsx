import { Center, Text } from "@chakra-ui/react";

interface Props {
  selectedImage: number;
  length: number;
}

const Counter = ({ selectedImage, length }: Props) => {
  const fontSize = { base: "2vw", sm: "2.0vw", md: "1.7vw", lg: "1.4vw" };
  const mLeft = { base: "2vw", sm: "-0.2vw", md: "0.1vw", lg: "0.5vw" };
  const mRight = { base: "2vw", sm: "-0.7vw", md: "-0.6vw", lg: "-0.5vw" };
  return (
    <Center ml={mLeft} mr={mRight} fontSize={fontSize}>
      <Text display="inline">
        {selectedImage}/{length}
      </Text>
    </Center>
  );
};

export default Counter;
