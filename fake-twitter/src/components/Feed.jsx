import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import tweetData from "../data/tweetData.json";
import { useState, useEffect } from "react";

const Feed = () => {
  const [tweetQuery, setTweetQuery] = useState([]);

  useEffect(() => {
    setTweetQuery(tweetData);
  }, []);

  console.log(tweetQuery);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post />
      {tweetQuery.map((tweet) => (
        <Post key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
