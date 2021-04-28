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
