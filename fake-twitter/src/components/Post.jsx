import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ChatBubbleOutline, FavoriteBorder } from "@material-ui/icons";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  (
    {
      // displayName,
      // username,
      // verified,
      // timestamp,
      // text,
      // image,
      // avatar,

      tweet,
      tweets,
      setTweets,
      // profile_image_url,
      // name,
      // screen_name,
      // verified,
      // created_at,
      // text,
      // image,
    },
    ref
  ) => {
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
        {/* <div className="post__avatar">
          <Avatar src={profile_image_url} />
        </div> */}
        <div className="post__body">
          {/* <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}{" "}
                <span className="post_headerSpecial">
                  <VerifiedUserIcon className="post__badge" /> @{screen_name}{" "}
                </span>
              </h3>
            </div> */}
          <div className="post_headerDescription">
            <p>{tweet.text}</p>
          </div>
        </div>
        {/* <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishIcon fontSize="small" />
          </div> */}
        <div className="placeholder__post__edit">
          <button className="placeholder__post__edit__button">Edit</button>
          <button
            className="placeholder__post__delete__button"
            onClick={() => deleteTweet(tweet.tweet_id)}
          >
            Delete
          </button>
        </div>
      </div>
      // </div>
    );
  }
);

export default Post;
