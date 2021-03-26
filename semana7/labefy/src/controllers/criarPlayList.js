import axios from "axios";
import { headerReq, urlPlaylist } from "../config/urlsAPI";

export const criarPlayList = async (body) => {
  try {
    const response = await axios.post(urlPlaylist, body, headerReq);

    if (response.status === 200) {
      return "PlayList criada com Sucesso";
    }
  } catch (error) {
    const { message } = error.response.data;
    if (message === "There already is a playlist with a similiar name.") {
      return "Já existe uma PlayList com esse nome!";
    }
  }
};
