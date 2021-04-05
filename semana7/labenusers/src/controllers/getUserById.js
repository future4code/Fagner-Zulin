import axios from "axios";
import { axiosConfig, baseUrl } from "../config/apiConfig";

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`, axiosConfig);

    return response.data;
  } catch (err) {
    alert(err.response.data.message);
  }
};
