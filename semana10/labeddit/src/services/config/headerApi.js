import { getToken } from '../../utils/localStorageFunctions';

const headerApi = () => {
  const token = getToken();
  const header = { headers: { Authorization: token } };
  return header;
};

export default headerApi;
