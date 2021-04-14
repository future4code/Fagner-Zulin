import axios from 'axios';
import urlBaseApi from './config/apiConfig';

const postLogin = async (body) => {
  try {
    const response = await axios.post(`${urlBaseApi}/login`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default postLogin;
