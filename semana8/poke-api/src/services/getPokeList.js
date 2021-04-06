import axios from "axios";

export const getPokeList = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
