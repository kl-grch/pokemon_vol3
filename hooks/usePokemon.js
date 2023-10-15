"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePokemon(id) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
