import axios from "axios";
import { axiosConfig, baseUrl } from "../config/apiConfig";

export const editUser = async (id, newData) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newData, axiosConfig);

    if (response.status === 200) {
      alert("Editing done!");
    }
  } catch (err) {
    alert(err.response.data.messenge);
  }
};
