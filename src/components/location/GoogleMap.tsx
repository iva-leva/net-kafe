import { zIndexLocationGoogleMap } from "@/constants/zIndex";
import { Center } from "@chakra-ui/react";

const GoogleMap = () => {
  return (
    <Center
      w="100%"
      h={{ base: "160vw", sm: "100vw", md: "47.3vw", lg: "47.3vw" }}
      mx={{ base: "6vw", sm: "3vw" }}
      my={{ base: "6vw", sm: "3vw" }}
      borderRadius={10}
      shadow={"xl"}
      overflow={"hidden"}
      zIndex={zIndexLocationGoogleMap}
    >
      <iframe
        data-aos="zoom-out-up"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12199.602512993402!2d-8.243478609554804!3d37.07579570965243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acc1f4f8975d3%3A0x53f35daa5b5bc738!2sRestaurante%26Bar%20NK!5e0!3m2!1sen!2spt!4v1749930972176!5m2!1sen!2spt"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Center>
  );
};

export default GoogleMap;
