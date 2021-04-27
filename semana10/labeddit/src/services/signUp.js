import axios from 'axios';
import baseUrl from './config/urlApi';

const signUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    const { token } = response.data;
    const { username } = response.data.user;

    return {
      token,
      status: true,
      username,
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
