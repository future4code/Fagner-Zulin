import axios from 'axios';
import urlBaseApi from './config/apiConfig';
import headerToReq from './config/headerToReq';

const deleteTrip = async (id) => {
  const header = headerToReq();

  try {
    const response = await axios.delete(`${urlBaseApi}/trips/${id}`, header);
    const { status } = response;

    return { code: status };
  } catch (error) {
    const { status } = error.response;

    return { code: status };
  }
};

export default deleteTrip;
