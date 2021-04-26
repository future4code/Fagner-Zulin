export const gotToLoginPage = (history) => {
  history.push('/');
};

export const gotToFeedPage = (history) => {
  history.push('/feed');
};

export const gotToPostPage = (history, id) => {
  history.push(`/post/${id}`);
};
