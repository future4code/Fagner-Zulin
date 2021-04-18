import axios from "axios";
import { urlPutClear } from "./config/apiConfig";

export const putClear = async () => {
  try {
    const response = await axios.put(urlPutClear);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
