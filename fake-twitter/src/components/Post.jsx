import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ChatBubbleOutline, FavoriteBorder } from "@material-ui/icons";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";
import EditPost from "./EditPost";

const Post = forwardRef(({ tweet, tweets, setTweets }, ref) => {
  //Delete tweet
  const deleteTweet = async (id) => {
    try {
      const deleteTweet = await fetch(
        `http://localhost:3001/api/tweets/${id}`,
        {
          method: "DELETE",
        }
      );

      setTweets(tweets.filter((tweet) => tweet.tweet_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        {/* TODO: change to tweet.profile_image_url */}
        <Avatar src="placeholder" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {/* {tweet.name} */}
              placeholder
              <span className="post_headerSpecial">
                {/* {tweet.screen_name} */}
                {tweet.user?.verified ? (
                  <VerifiedUserIcon className="post__badge" />
                ) : null}
                @placeholder
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{tweet.text}</p>
          </div>
        </div>
        <img src="placeholder" alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
        <div className="placeholder__post__edit">
          <EditPost
            tweet={tweet}
            tweets={tweets}
            setTweets={setTweets}
            deleteTweet={deleteTweet}
          />

          <button
            className="placeholder__post__delete__button"
            onClick={() => deleteTweet(tweet.tweet_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
});

export default Post;
