"use client";

import Link from "next/link";
import "./header.scss";
import Image from "next/image";
import logo from "public/images/logo.png";
import useAllPokemons from "@/hooks/useAllPokemons";
import { useState } from "react";

const testItems = ["Bulbasaur", "Pikachu", "Squirtle", "Charmander"];

export default function Header() {
  const [searchPokemon, setSearchPokemon] = useState("");

  const { data } = useAllPokemons();

  return (
    <header className="header container">
      <div className="header__logo">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="header logo"
            style={{ width: "auto", height: "100%" }}
            priority
          />
        </Link>
      </div>

      {/* <div className="header__search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Find your pokemon"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
        <div className="search__items">
          {!data
            ? null
            : data.results.map((item, i) => (
                <Link key={i} href={"/"}>
                  <div className="items__item">
                    <div className="items__img">
                      <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        alt=""
                        height={75}
                        width={75}
                      />
                    </div>
                    <div className="items__name">{item.name}</div>
                  </div>
                </Link>
              ))}
        </div>
      </div> */}

      <div className="header__links">
        <Link href={"/pokemons"}>Pokemons</Link>
      </div>
    </header>
  );
}
