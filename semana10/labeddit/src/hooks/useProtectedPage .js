import { useEffect } from 'react';
import { gotToLoginPage } from '../routers/coordinate';
import { hasToken } from '../utils/localStorageFunctions';
import { protectedWarning } from '../utils/toastsFunctions';

const useProtectedPage = (history, toast) => {
  useEffect(() => {
    const result = hasToken();

    if (!result) {
      gotToLoginPage(history);
      protectedWarning(toast);
    }
  }, []);
};

export default useProtectedPage;
