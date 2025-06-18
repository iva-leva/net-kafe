import { useState } from "react";
import { Box, Center, useBreakpointValue } from "@chakra-ui/react";

import GoogleMap from "./GoogleMap";
import StaticMap from "./StaticMap";
import MapRibbon from "./MapRibbon";

import OrangeOverlayBox from "../OrangeOverlayBox";
import OrangeOverlayBoxMini from "@/componentsMini/OrangeOverlayBoxMini";
import { colorMapBg } from "../../constants/colors";

const Maps = () => {
  const [liveGoogleMap, setLiveGoogleMap] = useState(false);
  const handleClick = () => setLiveGoogleMap(!liveGoogleMap);
  const overlay = useBreakpointValue({
    base: <OrangeOverlayBoxMini />,
    sm: <OrangeOverlayBox />,
  });

  return (
    <Box w={"100%"} position="relative" overflow={"hidden"}>
      {overlay}
      <MapRibbon handleClick={handleClick} liveGoogleMap={liveGoogleMap} />
      <Center bg={colorMapBg}>
        {!liveGoogleMap && <StaticMap />}
        {liveGoogleMap && <GoogleMap />}
      </Center>
    </Box>
  );
};

export default Maps;
