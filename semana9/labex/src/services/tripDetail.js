import axios from 'axios';
import urlBaseApi from './config/apiConfig';
import headerToReq from './config/headerToReq';

const tripDetail = async (id) => {
  const header = headerToReq();
  try {
    const response = await axios.get(`${urlBaseApi}/trip/${id}`, header);
    const { status } = response;
    const { trip } = response.data;

    return { code: status, trip };
  } catch (error) {
    const { status } = error.response;

    return { code: status, message: error.response };
  }
};

export default tripDetail;
