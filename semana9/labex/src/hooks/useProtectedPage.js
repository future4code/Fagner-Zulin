import { useEffect } from 'react';
import { gotToLoginPage } from '../routers/coordinates';
import { hasToken } from '../utils/localStorageFunctions';

const useProtectedPage = (history) => {
  useEffect(() => {
    const result = hasToken();

    if (!result) {
      gotToLoginPage(history);
    }
  }, []);
};

export default useProtectedPage;
