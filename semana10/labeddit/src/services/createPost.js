import axios from 'axios';
import headerApi from './config/headerApi';
import baseUrl from './config/urlApi';

const createPost = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/posts`, body, headerApi());
    const { success } = response.data;

    return { status: success };
  } catch (error) {
    return { status: false };
  }
};

export default createPost;
