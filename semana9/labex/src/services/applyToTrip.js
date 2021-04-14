import axios from 'axios';
import urlBaseApi from './config/apiConfig';

const applyToTrip = async (id, body) => {
  try {
    const response = await axios.post(`${urlBaseApi}/trips/${id}/apply`, body);
    const { status } = response.status;

    return { code: status };
  } catch (error) {
    const { status } = error.response;

    return { code: status };
  }
};

export default applyToTrip;
