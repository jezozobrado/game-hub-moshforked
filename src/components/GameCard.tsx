import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import { Trailer } from "../entities/Trailer";
import useTrailers from "../hooks/useTrailers";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { data, error, isLoading } = useTrailers(game.id);

  if (error) throw error;

  return (
    <Card
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => {
        console.log(data);

        return setIsHovered(true);
      }}
    >
      {isHovered && data?.count! > 0 ? (
        <video src={data?.results[0]?.data[480]} autoPlay muted />
      ) : (
        <Image src={getCroppedImageUrl(game.background_image)} />
      )}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
