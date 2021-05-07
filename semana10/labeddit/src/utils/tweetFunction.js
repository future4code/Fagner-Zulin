const tweet = (title, id) => {
  const titleToTweet = title.replace(' ', '%20');

  const tweetText = `${titleToTweet}.%20Saiba%20mais%20em:%20`;

  const linkPost = `url=http://social-media-labeddit.surge.sh/post/${id}`;

  const url = `https://twitter.com/intent/tweet?text=${tweetText}&${linkPost}`;

  window.open(url, '_blank');
};

export default tweet;
