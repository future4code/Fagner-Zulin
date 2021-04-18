import axios from "axios";
import { urlGetMatches } from "./config/apiConfig";

export const getMatches = async () => {
  try {
    const response = await axios.get(urlGetMatches);

    return response.data.matches;
  } catch (error) {
    console.error(error);
  }
};
