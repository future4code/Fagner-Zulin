export const saveToken = (token) => {
  window.localStorage.setItem('token', token);
};

export const deleteToken = () => {
  window.localStorage.removeItem('token');
};

export const getToken = () => window.localStorage.getItem('token');

export const hasToken = () => {
  const result = window.localStorage.getItem('token');
  return !!result;
};
