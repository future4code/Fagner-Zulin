import axios from "axios";
import { axiosConfig, baseUrl } from "../config/apiConfig";

export const searchUsers = async (name) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search?name=${name}`,
      axiosConfig
    );
    return response.data;
  } catch (err) {
    alert(err.response.data.messenge);
  }
};
