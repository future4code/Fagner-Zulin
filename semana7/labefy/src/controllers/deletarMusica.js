import axios from "axios";
import { headerReq, urlPlaylist } from "../config/urlsAPI";

export const deletarMusica = async (idPlayList, idMusica) => {
  try {
    const response = await axios.delete(
      `${urlPlaylist}/${idPlayList}/tracks/${idMusica}`,
      headerReq
    );

    if (response.status === 200) {
      alert("Música apagada com sucesso ✅");
    }
  } catch (error) {
    console.error(error);
  }
};
