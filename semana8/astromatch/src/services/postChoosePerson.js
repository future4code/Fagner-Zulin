import axios from "axios";
import { urlPostChoosePerson } from "./config/apiConfig";

export const postChoosePerson = async (choice) => {
  try {
    const response = await axios.post(urlPostChoosePerson, choice);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
