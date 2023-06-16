const Tweet = ({ tweetQuery }) => {
  const { created_at, text, user } = tweetQuery;

  return (
    <div className="tweet">
      <div className="tweet-header">
        <h1>test</h1>
        <img className="profile-image" src={"test"} alt="Profile" />
        <div className="user-info">
          <h3 className="user-name">{"test"}</h3>
          <p className="user-screen-name">@{"test"}</p>
          <p className="tweet-date">{created_at}</p>
        </div>
      </div>
      <p className="tweet-text">{text}</p>
    </div>
  );
};

export default Tweet;
