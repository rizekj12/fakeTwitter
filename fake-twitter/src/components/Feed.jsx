import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import tweetData from "../data/tweetData.json";
import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import { Flip } from "@material-ui/icons";

const Feed = () => {
  // for JSON data
  // const [tweetQuery, setTweetQuery] = useState([]);

  // useEffect(() => {
  //   setTweetQuery(tweetData);
  // }, []);

  // for Server data
  const [tweets, setTweets] = useState([]);
  const getTweets = async () => {
    try {
      // by default, fetch makes a GET request
      const response = await fetch("http://localhost:3001/api/tweets");
      const jsonData = await response.json();
      setTweets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  // console.log(tweetQuery);
  console.log(tweets);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {tweets.map((tweet) => (
          <Post
            key={tweet.tweet_id}
            tweet={tweet}
            tweets={tweets}
            setTweets={setTweets}
          />
        ))}
      </FlipMove>
      {/* 
      <FlipMove>
        {tweetQuery.map((tweet) => (
          <Post
            key={tweet.id}
            profile_image_url={tweet.user.profile_image_url}
            name={tweet.user.name}
            screen_name={tweet.user.screen_name}
            verified={tweet.verified}
            created_at={tweet.user.created_at}
            text={tweet.text}
            image={tweet.image}
          />
        ))}
      </FlipMove> */}
    </div>
  );
};

export default Feed;
