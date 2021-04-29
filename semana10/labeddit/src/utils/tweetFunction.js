const tweet = (title) => {
  const titleToTweet = title.replace(' ', '%20');

  const tweetText = `${titleToTweet}.%20Saiba%20mais%20em:%20`;

  const url = `https://twitter.com/intent/tweet?text=${tweetText}`;

  window.open(url, '_blank');
};

export default tweet;
