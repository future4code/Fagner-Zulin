export const gotToHomePage = (history) => {
  history.push('/');
};

export const gotToListTripPage = (history) => {
  history.push('/trips/list');
};

export const gotToLoginPage = (history) => {
  history.push('/login');
};

export const gotToAdminHomePage = (history) => {
  history.push('/admin/trips/list');
};

export const gotToTripDetailsPage = (history, id) => {
  history.push(`/admin/trips/${id}`);
};
