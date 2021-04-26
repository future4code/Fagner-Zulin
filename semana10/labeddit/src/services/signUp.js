import axios from 'axios';
import baseUrl from './config/urlApi';

const signUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    const { token } = response.data;

    return {
      token,
      status: true,
    };
  } catch (error) {
    const { message } = error.response.data;

    return {
      message,
      status: false,
    };
  }
};

export default signUp;
