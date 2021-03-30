import axios from "axios";
import { headerReq, urlPlaylist } from "../config/urlsAPI";

export const pegarPlayLists = async () => {
  try {
    const response = await axios.get(urlPlaylist, headerReq);
    const { result } = response.data;

    if (result.quantity > 0) {
      return result.list;
    } else {
      return -1;
    }
  } catch (error) {
    console.error(error);
  }
};
