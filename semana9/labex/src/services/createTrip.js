import axios from 'axios';
import urlBaseApi from './config/apiConfig';
import headerToReq from './config/headerToReq';

const createTrip = async (body) => {
  const header = headerToReq();

  try {
    const response = await axios.post(`${urlBaseApi}/trips`, body, header);
    const { status } = response;
    const { trip } = response.data;

    return { code: status, trip };
  } catch (error) {
    const { status } = error.response;

    return { code: status };
  }
};

export default createTrip;
