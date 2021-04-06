import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemon } from "../services/getPokemon";

const Card = styled.div`
  border-radius: 10px;
  background-color: #bdc3c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getPokemon(props.pokemon);
      setPokemon(result);
    })();
  }, [props.pokemon, setPokemon]);

  return (
    <Card>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <p>{pokemon.name}</p>
      <p>{`${pokemon.weight} Kg`}</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
    </Card>
  );
}
