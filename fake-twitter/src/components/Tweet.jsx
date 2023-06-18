import React from "react";
import { Avatar, Typography, makeStyles, IconButton } from "@material-ui/core";
import {
  ChatBubbleOutlineOutlined,
  RepeatOutlined,
  FavoriteBorderOutlined,
  VisibilityOutlined,
  ShareOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tweet: {
    display: "flex",
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  userName: {
    fontWeight: "bold",
  },
  screenName: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
  },
  tweetDate: {
    color: theme.palette.text.secondary,
  },
  tweetText: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const Tweet = ({ tweet }) => {
  const classes = useStyles();
  const { created_at, text, user } = tweet;

  return (
    <div className={classes.tweet}>
      <Avatar
        className={classes.avatar}
        src={user.profile_image_url}
        alt="Profile"
      />
      <div>
        <Typography variant="body1" className={classes.userName}>
          {user.name}
        </Typography>
        <Typography
          variant="body2"
          className={classes.screenName}
          component="span"
        >
          @{user.screen_name}
        </Typography>
        <Typography
          variant="body2"
          className={classes.tweetDate}
          component="span"
        >
          {created_at}
        </Typography>
        <Typography variant="body1" className={classes.tweetText}>
          {text}
        </Typography>
        <div>
          <IconButton className={classes.button} aria-label="Reply">
            <ChatBubbleOutlineOutlined />
          </IconButton>
          <IconButton className={classes.button} aria-label="Retweet">
            <RepeatOutlined />
          </IconButton>
          <IconButton className={classes.button} aria-label="Like">
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton className={classes.button} aria-label="View">
            <VisibilityOutlined />
          </IconButton>
          <IconButton className={classes.button} aria-label="Share">
            <ShareOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
