import axios from 'axios';
import headerApi from './config/headerApi';
import baseUrl from './config/urlApi';

const voteComment = async (idPost, idComment, body) => {
  try {
    await axios.put(
      `${baseUrl}/posts/${idPost}/comment/${idComment}/vote`,
      body,
      headerApi(),
    );
  } catch (error) {
    console.log(error);
  }
};

export default voteComment;
