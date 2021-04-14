import { getToken } from '../../utils/localStorageFunctions';

const headerToReq = () => {
  const token = getToken();
  const header = { headers: { auth: token } };
  return header;
};

export default headerToReq;
