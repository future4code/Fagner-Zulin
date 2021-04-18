import axios from "axios";
import { urlGetChoose } from "./config/apiConfig";

export const getProfileToChoose = async () => {
  try {
    const response = await axios.get(urlGetChoose);

    return response.data.profile;
  } catch (error) {
    console.error(error);
  }
};
