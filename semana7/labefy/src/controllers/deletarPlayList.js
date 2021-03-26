import axios from "axios";
import { headerReq, urlPlaylist } from "../config/urlsAPI";

export const deletarPlayList = async (id) => {
  try {
    const response = await axios.delete(`${urlPlaylist}/${id}`, headerReq);
    if (response.status === 200) {
      alert("PlayList apagada com sucesso ✅");
    }
  } catch (error) {
    console.log(error);
  }
};
