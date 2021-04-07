import axios from "axios";

export const getPokemon = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
