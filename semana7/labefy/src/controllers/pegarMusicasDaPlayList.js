import axios from "axios";
import { headerReq, urlPlaylist } from "../config/urlsAPI";

export const pegarMusicasDaPlayList = async (id) => {
  try {
    const response = await axios.get(`${urlPlaylist}/${id}/tracks`, headerReq);
    const { result } = response.data;

    if (result.quantity > 0) {
      return result.tracks;
    } else {
      return -1;
    }
  } catch (error) {
    console.error(error);
  }
};
