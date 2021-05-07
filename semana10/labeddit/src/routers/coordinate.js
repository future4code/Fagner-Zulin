export const gotToHomePage = (history) => {
  history.push('/');
};

export const gotToLoginPage = (history) => {
  history.push('/login');
};

export const gotToFeedPage = (history) => {
  history.push('/feed');
};

export const gotToPostPage = (history, id) => {
  history.push(`/post/${id}`);
};
