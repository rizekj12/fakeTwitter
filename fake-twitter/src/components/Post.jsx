import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import { FavoriteOutlined, ShareOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
}));

const Post = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the server or local file
    fetch("../data/postData.json")
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch((error) => console.error("Error fetching post data:", error));
  }, []);

  if (!postData) {
    return <Typography>Loading...</Typography>;
  }

  const { created_at, text, user } = postData;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={user.name}
      />
      <CardContent className={classes.content}>
        <Typography variant="body1" component="p">
          {text}
        </Typography>
      </CardContent>
      <Divider />
      <div className={classes.actions}>
        <IconButton>
          <FavoriteOutlined />
        </IconButton>
        <IconButton>
          <ShareOutlined />
        </IconButton>
      </div>
    </Card>
  );
};

export default Post;
