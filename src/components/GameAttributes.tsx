import {
  Box,
  Heading,
  Link,
  LinkBox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import platforms from "../data/platforms";
import useGame from "../hooks/useGame";
import CriticScore from "./CriticScore";

interface Props {
  gameId: number;
}
const GameAttributes = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGame(gameId);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} marginY={5} as="dl">
        <Box>
          <Heading as="dt" fontSize="xl" marginBottom={2}>
            Genres
          </Heading>

          {data?.genres.map((genre) => (
            <dd key={genre.id}>{genre.name}</dd>
          ))}
        </Box>
        <Box>
          <Heading as="dt" fontSize="xl" marginBottom={2}>
            Metacritic
          </Heading>
          {data ? <CriticScore score={data.metacritic} /> : null}
        </Box>

        <Box>
          <Heading as="dt" fontSize="xl" marginBottom={2}>
            Platforms
          </Heading>

          {data?.parent_platforms.map((p, index) => (
            <dd key={index}>{p.platform.name}</dd>
          ))}
        </Box>
        <Box>
          <Heading as="dt" fontSize="xl" marginBottom={2}>
            Website
          </Heading>
          <Link href={data?.website}>{data?.website}</Link>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
