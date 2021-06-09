import axios, { AxiosResponse } from "axios";
import { UserAddressRequest } from "../types/user";

export const getAddress = async (cep: string): Promise<UserAddressRequest> => {
  try {
    const { data }: AxiosResponse = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/ `
    );

    const addressData: UserAddressRequest = {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };

    return addressData;
  } catch (error) {
    throw new Error(error.message);
  }
};
