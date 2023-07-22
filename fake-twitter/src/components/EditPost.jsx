import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Avatar } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditPost = ({ tweet, tweets, setTweets, deleteTweet }) => {
  const [text, setText] = useState(tweet.text);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setText(tweet.text);
  };

  //Edit tweet
  const editText = async (e) => {
    e.preventDefault();
    try {
      const body = { text };
      await fetch(`http://localhost:3001/api/tweets/${tweet.tweet_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Tweet
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="tweetBox__input">
              <Avatar src="https://pbs.twimg.com/profile_images/1232827677377204224/hT6nT22h_400x400.png" />
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="What is happening?!"
                type="text"
              ></input>
            </div>
          </Typography>
          <Button
            onClick={(e) => {
              editText(e);
              handleClose();
            }}
            className="placeholder__post__edit__button"
          >
            Edit
          </Button>
          <Button
            className="placeholder__post__delete__button"
            onClick={() => {
              deleteTweet(tweet.tweet_id);
              handleClose();
            }}
          >
            Delete
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditPost;
