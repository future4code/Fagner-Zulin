import { gotToLoginPage } from '../routers/coordinates';
import { deleteToken } from './localStorageFunctions';

const logout = (history) => {
  deleteToken();
  gotToLoginPage(history);
};

export default logout;
