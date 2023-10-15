"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePokemonInfo(id) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
    fetcher
  );

  return {
    pokemonInfo: data,
    error,
    isLoading,
  };
}
