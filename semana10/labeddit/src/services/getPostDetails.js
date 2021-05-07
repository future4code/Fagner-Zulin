import axios from 'axios';
import headerApi from './config/headerApi';
import baseUrl from './config/urlApi';

const getPostDetails = async (idPost) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/${idPost}`, headerApi());
    const {
      comments,
      userVoteDirection,
      id,
      username,
      title,
      commentsCount,
      votesCount,
      createdAt,
      text,
    } = response.data.post;

    const post = {
      userVoteDirection,
      id,
      username,
      title,
      commentsCount,
      votesCount,
      createdAt,
      text,
    };

    return { status: true, comments, post };
  } catch (error) {
    return {
      status: false,
    };
  }
};

export default getPostDetails;
