"use client";

import Loader from "@/components/loader/Loader";
import "./pageHome.scss";
import usePokemon from "@/hooks/usePokemon";
import Image from "next/image";
import { useState } from "react";
import preview from "public/images/whos_that_pokemon.png";
import Link from "next/link";

export default function Home() {
  const [pokemonId, setPokemonId] = useState(2);

  const { data } = usePokemon(pokemonId);

  return (
    <main className="container">
      <div className="home-page">
        {!data ? (
          <Loader />
        ) : (
          <div className="home-page__items">
            <div className="items__item1">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemonId === 1 ? 1017 : pokemonId - 1
                }.png`}
                alt={`image ${data.name}`}
                width={375}
                height={375}
                onClick={() =>
                  setPokemonId(pokemonId === 1 ? 1017 : pokemonId - 1)
                }
              />
              <i
                onClick={() =>
                  setPokemonId(pokemonId === 1 ? 1017 : pokemonId - 1)
                }
                className="bi bi-arrow-left-circle"
              ></i>
            </div>
            <div className="items__item">
              <Link href={`/pokemons/${data.name}`}>
                <Image
                  src={
                    data.sprites.other["official-artwork"].front_default ===
                    null
                      ? preview
                      : data.sprites.other["official-artwork"].front_default
                  }
                  alt={`image ${data.name}`}
                  width={475}
                  height={475}
                  priority
                />
                <h1>{data.name}</h1>
              </Link>
            </div>
            <div className="items__item3">
              <i
                onClick={() =>
                  setPokemonId(pokemonId === 1017 ? 1 : pokemonId + 1)
                }
                className="bi bi-arrow-right-circle"
              ></i>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemonId === 1017 ? 1 : pokemonId + 1
                }.png`}
                alt={`image ${data.name}`}
                width={375}
                height={375}
                onClick={() =>
                  setPokemonId(pokemonId === 1017 ? 1 : pokemonId + 1)
                }
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
