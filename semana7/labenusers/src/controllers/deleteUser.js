import axios from "axios";
import { axiosConfig, baseUrl } from "../config/apiConfig";

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, axiosConfig);

    if (response.status === 200) {
      alert("User successfully deleted!");
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};
