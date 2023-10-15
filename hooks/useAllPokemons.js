"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useAllPokemon(offset, limit) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
