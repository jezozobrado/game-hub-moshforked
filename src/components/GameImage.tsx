import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import { HiOutlineMinus } from "react-icons/hi";
import { useState } from "react";

interface Props {
  gameSlug: string; //slug
}
const GameImage = ({ gameSlug }: Props) => {
  const { data } = useScreenshots(gameSlug);
  //   const [imageCarousel, setImageCarousel] = useState(data?.results[0].image);
  //   console.log(imageCarousel);

  const imageCarousel = data?.results[0].image;
  return (
    <Box position="relative">
      <Image src={imageCarousel} />
      {/* <Flex
        zIndex={10}
        justifyContent="space-around"
        position="absolute"
        bottom="1px"
        width="100%"
        // marginBottom={1}
        height="100%"
        // height="100%"
        alignItems="end"
        onMouseOut={() => {
          return setImageCarousel(data?.results[0].image);
        }}
      >
        {data?.results.map((d, index) => (
          <HiOutlineMinus
            size={40}
            opacity="50%"
            key={index}
            onMouseEnter={(e) => {
              //   e.stopPropagation();
              console.log(d.id);
              return setImageCarousel(d.image);
            }}
          />
        ))}
      </Flex> */}
    </Box>
  );
};

export default GameImage;
