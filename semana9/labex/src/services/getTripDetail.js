import axios from 'axios';
import { getToken } from '../utils/localStorageFunctions';
import urlBaseApi from './config/apiConfig';

const getTripDetail = async (id) => {
  const token = getToken();
  const header = { headers: { auth: token } };
  try {
    const response = await axios.get(`${urlBaseApi}/trips/${id}`, header);
    const { status } = response.status;
    const { trip } = response.data;

    return { code: status, trip };
  } catch (error) {
    const { status } = error.response;
    const { message } = error.response.data;

    return { code: status, message };
  }
};

export default getTripDetail;
