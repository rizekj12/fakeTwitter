import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { useState } from "react";

const TweetBox = () => {
  const [text, setText] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    console.log("Tweet message:", text); // Add this line to check the value
    try {
      const body = { text };
      const response = await fetch("http://localhost:3001/api/tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setText("");
      setTweetImage("");
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1232827677377204224/hT6nT22h_400x400.png" />
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="What is happening?!"
            type="text"
          ></input>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
