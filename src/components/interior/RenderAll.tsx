import { Link } from "react-router-dom";
import { HStack, VStack, Box, useBreakpointValue } from "@chakra-ui/react";
import ImageDynamicShadow from "../ImageDynamicShadow";
// import { interiorPictures as pictures } from "../ContentInterior";
import { pictures } from "@/constants/interiorPictures";

const RenderAll = () => {
  let stacks: number[] | undefined = useBreakpointValue({
    base: [0, 1, 2],
    sm: [0, 1, 2],
    md: [0, 1, 2],
    lg: [0, 1, 2, 3],
    xl: [0, 1, 2, 3, 4],
  });

  stacks ? stacks : (stacks = [0]);

  let widthVStack: string | undefined = useBreakpointValue({
    // base: "96%",
    // sm: "49%",
    base: "33%",
    sm: "33%",
    md: "33%",
    lg: "24%",
    xl: "19%",
  });

  widthVStack ? widthVStack : (widthVStack = "99%");

  let px: string | undefined = useBreakpointValue({
    base: "1%",
    // sm: "2%",
    sm: "1%",
    md: "1%",
    lg: "0.5%",
    xl: "0.5%",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Box px={px}>
      <HStack
        data-aos="zoom-out-down"
        width="100%"
        justifyContent="space-evenly"
        alignItems="start"
      >
        {stacks.map((stack, indexStack) => (
          <VStack key={indexStack} width={widthVStack}>
            {pictures
              .filter(
                (_, indexPicture) => indexPicture % stacks.length === stack
              )
              .map((picture, indexPicture) => (
                <Link
                  to={`/Interior/${indexPicture * stacks.length + stack + 1}`}
                  key={indexPicture * stacks.length + stack + 1}
                >
                  <Box
                    onClick={scrollToTop}
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      opacity: "90%",
                      cursor: "pointer",
                      transform: "scale(1.02)",
                    }}
                  >
                    <Box key={indexPicture} data-aos="zoom-out-up" width="100%">
                      <ImageDynamicShadow
                        shadowScale="scale(0.96 , 0.96)"
                        src={picture}
                        width="100%"
                      />
                    </Box>
                  </Box>
                </Link>
              ))}
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default RenderAll;
