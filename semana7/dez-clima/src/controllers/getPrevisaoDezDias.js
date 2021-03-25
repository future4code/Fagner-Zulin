import axios from "axios";
import { getUrlHgBrasil } from "../config/apisConfig";

export const getPrevisaoDezDias = async (cidade, uf) => {
  try {
    const response = await axios.get(getUrlHgBrasil(cidade, uf));
    return response.data.results.forecast;
  } catch (error) {
    console.error(error.response.data);
  }
};
