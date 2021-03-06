import axios from 'axios';
import urlBaseApi from './config/apiConfig';
import headerToReq from './config/headerToReq';

const decideCandidate = async (tripId, candidateId, body) => {
  const header = headerToReq();

  try {
    const response = await axios.put(
      `${urlBaseApi}/trips/${tripId}/candidates/${candidateId}/decide`,
      body,
      header,
    );
    const { status } = response;

    return { code: status };
  } catch (error) {
    const { status } = error.response;

    return { code: status };
  }
};

export default decideCandidate;
