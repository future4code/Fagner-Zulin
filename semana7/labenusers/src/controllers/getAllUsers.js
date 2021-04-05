import axios from "axios";
import { axiosConfig, baseUrl } from "../config/apiConfig";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(baseUrl, axiosConfig);
    return response.data;
  } catch (err) {
    alert(err.response.data.message);
  }
};
