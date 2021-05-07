import axios from 'axios';
import headerApi from './config/headerApi';
import baseUrl from './config/urlApi';

const vote = async (id, body) => {
  try {
    await axios.put(`${baseUrl}/posts/${id}/vote`, body, headerApi());
  } catch (error) {
    console.log(error);
  }
};

export default vote;
