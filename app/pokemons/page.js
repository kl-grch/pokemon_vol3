"use client";

import useAllPokemons from "@/hooks/useAllPokemons";
import "./pokemonsPage.scss";
import Loader from "@/components/loader/Loader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AllPokemons() {
  const [offsetItems, setOffsetItems] = useState(0);
  const [limitItems, setLimitItems] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useAllPokemons(offsetItems, limitItems);

  return (
    <div className="all-pokemons container">
      <div className="all-pokemons__popular">
        <h1 className="popular__title">Most popular pokemons</h1>
        <div className="popular__items">
          <Link href={"/pokemons/bulbasaur"}>
            <div className="items__pokemon">
              <div className="pokemon__image">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`}
                  alt="Bulbasaur"
                  width={250}
                  height={250}
                />
              </div>
              <div
                className="pokemon__name"
                style={{ color: "#8cc5a9", textShadow: "3px 3px #46735b" }}
              >
                Bulbasaur
              </div>
            </div>
          </Link>
          <Link href={"/pokemons/pikachu"}>
            <div className="items__pokemon">
              <div className="pokemon__image">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png`}
                  alt="Pikachu"
                  width={250}
                  height={250}
                />
              </div>
              <div
                className="pokemon__name"
                style={{ color: "#f3d77a", textShadow: "3px 3px black" }}
              >
                Pikachu
              </div>
            </div>
          </Link>
          <Link href={"/pokemons/squirtle"}>
            <div className="items__pokemon">
              <div className="pokemon__image">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png`}
                  alt="Squirtle"
                  width={250}
                  height={250}
                />
              </div>
              <div
                className="pokemon__name"
                style={{ color: "#8fc4d0", textShadow: "3px 3px #a77565" }}
              >
                Squirtle
              </div>
            </div>
          </Link>
          <Link href={"/pokemons/charmander"}>
            <div className="items__pokemon">
              <div className="pokemon__image">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png`}
                  alt="Charmander"
                  width={250}
                  height={250}
                />
              </div>
              <div
                className="pokemon__name"
                style={{ color: "#e6a97b", textShadow: "3px 3px #a17a60" }}
              >
                Charmander
              </div>
            </div>{" "}
          </Link>
        </div>
      </div>
      <div className="all-pokemons__all-items">
        <h2 className="all-items__title">All pokemons</h2>

        {!data ? (
          <Loader />
        ) : (
          <div className="all-items__items">
            {data.results.map((item, i) => {
              return (
                <div className="items__pokemon" key={item.name}>
                  <Link href={`/pokemons/${item.name}`}>
                    <div className="pokemon__image">
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                          offsetItems + i + 1
                        }.png`}
                        alt={item.name}
                        width={300}
                        height={300}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div className="pokemon__name">
                      {item.name} #{offsetItems + i + 1}
                    </div>
                  </Link>
                </div>
              );
            })}

            <div className="items__buttons">
              <button
                onClick={() => {
                  setOffsetItems(offsetItems - 20);
                  setCurrentPage(offsetItems / 20);
                }}
                disabled={offsetItems <= 0 ? true : false}
              >
                <i className="bi bi-caret-left-fill"></i> Prew
              </button>
              <button
                onClick={() => {
                  setOffsetItems(0);
                  setCurrentPage(1);
                }}
              >
                First page
              </button>
              <button>Page {currentPage}</button>
              <button
                onClick={() => {
                  setOffsetItems(1000);
                  setCurrentPage(51);
                }}
              >
                Last page
              </button>

              <button
                onClick={() => {
                  setLimitItems(17);
                  setOffsetItems(offsetItems + 20);
                  setCurrentPage(offsetItems / 20 + 2);
                }}
                disabled={offsetItems >= 1000 ? true : false}
              >
                Next <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
