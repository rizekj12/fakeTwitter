import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ChatBubbleOutline, FavoriteBorder } from "@material-ui/icons";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1232827677377204224/hT6nT22h_400x400.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Duncan Wood{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @duncanwood
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdpYnA0YW51YzdzZThxa3lxNDk2dndxNGxheW1kdm9jcXh2YmFjeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xjTIBA4gjvXIQ/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
