import axio from "axios";
import { getUrlViaCep } from "../config/apisConfig";

export const getEndereco = async (cep) => {
  try {
    const response = await axio.get(getUrlViaCep(cep));

    if (response.data.erro) {
      throw new Error("CEP não encontrado");
    } else {
      const { localidade, uf } = response.data;
      return { localidade, uf };
    }
  } catch (error) {
    console.error(error);
  }
};
