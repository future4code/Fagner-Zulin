import vote from '../services/vote';

export const votePositiveUpdateState = (
  setFunction,
  array,
  userVoteDirection,
  votesCount,
  id,
) => {
  if (userVoteDirection === 0) {
    const currVote = votesCount + 1;

    const arrayAfterVote = array.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          votesCount: currVote,
          userVoteDirection: 1,
        };
      }
      return item;
    });

    setFunction(arrayAfterVote);
  } else if (userVoteDirection === +1) {
    const currVote = votesCount - 1;
    const arrayAfterVote = array.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          votesCount: currVote,
          userVoteDirection: 0,
        };
      }
      return item;
    });
    setFunction(arrayAfterVote);
  }
};

export const voteNegativeUpdateState = (
  setFunction,
  array,
  userVoteDirection,
  votesCount,
  id,
) => {
  if (userVoteDirection === 0) {
    const currVote = votesCount - 1;

    const arrayAfterVote = array.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          votesCount: currVote,
          userVoteDirection: -1,
        };
      }
      return item;
    });
    setFunction(arrayAfterVote);
  } else if (userVoteDirection === -1) {
    const currVote = votesCount + 1;
    const arrayAfterVote = array.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          votesCount: currVote,
          userVoteDirection: 0,
        };
      }
      return item;
    });
    setFunction(arrayAfterVote);
  }
};

export const votePositiveInPostPage = async (post, setPost) => {
  if (post.userVoteDirection === 0) {
    const currVote = post.votesCount + 1;
    setPost({
      ...post,
      votesCount: currVote,
      userVoteDirection: 1,
    });
    await vote(post.id, { direction: 1 });
  } else if (post.userVoteDirection === +1) {
    const currVote = post.votesCount - 1;
    setPost({
      ...post,
      votesCount: currVote,
      userVoteDirection: 0,
    });
    await vote(post.id, { direction: 0 });
  }
};

export const voteNegativeInPostPage = async (post, setPost) => {
  if (post.userVoteDirection === 0) {
    const currVote = post.votesCount - 1;
    setPost({
      ...post,
      votesCount: currVote,
      userVoteDirection: -1,
    });
    await vote(post.id, { direction: -1 });
  } else if (post.userVoteDirection === -1) {
    const currVote = post.votesCount + 1;
    setPost({
      ...post,
      votesCount: currVote,
      userVoteDirection: 0,
    });
    await vote(post.id, { direction: 0 });
  }
};
