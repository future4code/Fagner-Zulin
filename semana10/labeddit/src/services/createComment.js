import axios from 'axios';
import headerApi from './config/headerApi';
import baseUrl from './config/urlApi';

const createComment = async (idPost, body) => {
  try {
    await axios.post(`${baseUrl}/posts/${idPost}/comment`, body, headerApi());

    return { status: true };
  } catch (error) {
    return { status: false };
  }
};

export default createComment;
