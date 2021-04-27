import axios from 'axios';
import headerApi from './config/headerApi';
import baseUrl from './config/urlApi';

const getPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`, headerApi());
    const { posts } = response.data;

    return {
      posts,
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

export default getPosts;
