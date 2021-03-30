import axios from "axios";
import { headerReq, urlPlaylist } from "../config/urlsAPI";

export const adicionarMusicaNaPlayList = async (id, body) => {
  try {
    const response = await axios.post(
      `${urlPlaylist}/${id}/tracks`,
      body,
      headerReq
    );

    if (response.status === 200) {
      return "Música adicionarda com sucesso 🎊";
    }
  } catch (error) {
    return "Algum campo está faltando!😕 Preencha todos os campos 👍🏽 ";
  }
};
