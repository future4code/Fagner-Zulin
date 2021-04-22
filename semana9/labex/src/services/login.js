import axios from 'axios';
import urlBaseApi from './config/apiConfig';

const login = async (body) => {
  try {
    const response = await axios.post(`${urlBaseApi}/login`, body);
    const { status } = response;
    const { token } = response.data;
    return { code: status, token };
  } catch (error) {
    return { code: error.response.status };
  }
};

export default login;
