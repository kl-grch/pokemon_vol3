"use client";

import "./notFound.scss";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="not-found container">
      <h2>Page not found</h2>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
        alt="Snorlax"
        width={475}
        height={475}
        priority
      />
    </div>
  );
}
