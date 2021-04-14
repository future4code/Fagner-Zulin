import axios from 'axios';
import urlBaseApi from './config/apiConfig';
import headerToReq from './config/headerToReq';

const getTripDetail = async (id) => {
  const header = headerToReq();
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
