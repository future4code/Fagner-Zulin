import axios from 'axios';
import urlBaseApi from './config/apiConfig';

const tripsList = async () => {
  try {
    const response = await axios.get(`${urlBaseApi}/trips`);
    const { status } = response.status;
    const { trips } = response.data;

    return { code: status, trips };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;

    return { code: status, message };
  }
};

export default tripsList;
