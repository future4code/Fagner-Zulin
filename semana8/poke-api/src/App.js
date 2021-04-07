import React, { useEffect, useState } from "react";
import { Container, ContainerCard, ContainerSelect } from "./app.styled";
import PokeCard from "./components/PokeCard";
import { getPokeList } from "./services/getPokeList";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await getPokeList();
      setPokeList(response);
    })();
  }, [setPokeList]);

  const handlePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <Container>
      <ContainerSelect>
        <select onClick={handlePokeName}>
          <option value="">Escolha um Pokemon</option>
          {pokeList.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </ContainerSelect>
      <ContainerCard>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </ContainerCard>
    </Container>
  );
}
