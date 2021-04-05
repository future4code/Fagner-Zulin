import axios from "axios";
import { axiosConfig, baseUrl } from "../config/apiConfig";

export const createUser = async (user) => {
  try {
    const response = await axios.post(baseUrl, user, axiosConfig);

    if (response.status === 201) {
      alert("Created User!");
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};
