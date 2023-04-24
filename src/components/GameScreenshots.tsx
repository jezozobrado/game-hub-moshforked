import { Image } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import APIClient from "../services/api-client";

interface Props {
  slug: string;
}
const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenshots(slug);
  console.log(data?.results);
  if (isLoading) return null;
  if (error) throw error;

  return data ? (
    <>
      {data.results.map((d) => (
        <Image key={d.id} src={d.image} />
      ))}
    </>
  ) : null;
};

export default GameScreenshots;
