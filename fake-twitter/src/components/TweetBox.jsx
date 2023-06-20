import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <Avatar src="https://pbs.twimg.com/profile_images/1232827677377204224/hT6nT22h_400x400.png" />
        <input placeholder="What is happening?!"></input>
        <div className="tweetBox__input" type="text"></div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
