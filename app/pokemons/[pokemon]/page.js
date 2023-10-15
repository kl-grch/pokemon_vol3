"use client";

import Loader from "@/components/loader/Loader";
import usePokemon from "@/hooks/usePokemon";
import "./pagePokemon.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import usePokemonInfo from "@/hooks/usePokemonInfo";

export default function PagePokemon({ params }) {
  const { data } = usePokemon(params.pokemon);
  const { pokemonInfo } = usePokemonInfo(params.pokemon);

  return (
    <div className="pokemon">
      <Container>
        {!data ? (
          <Loader />
        ) : (
          <Row>
            <Col lg={6}>
              <div className="pokemon__image">
                <Image
                  alt={data.name}
                  src={data.sprites.other["official-artwork"].front_default}
                  height={475}
                  width={475}
                  style={{ maxWidth: "475px", width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="pokemon__info">
                <h1 className="info__name">
                  {data.name} № {data.id}
                </h1>
                <div className="info__details">
                  <div className="details__descr">
                    {!pokemonInfo
                      ? "loading"
                      : pokemonInfo?.flavor_text_entries[0].flavor_text}
                  </div>
                  <div className="details__height">
                    Height: <span>{data.height}</span>
                  </div>
                  <div className="details__weight">
                    Weight: <span>{data.weight}</span>
                  </div>
                  <div className="details__color">
                    Color:{" "}
                    <span
                      style={{
                        color: !pokemonInfo ? null : pokemonInfo?.color.name,
                      }}
                    >
                      {!pokemonInfo ? "loading" : pokemonInfo?.color.name}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
