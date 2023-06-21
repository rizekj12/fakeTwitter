import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { ChatBubbleOutline, FavoriteBorder } from "@material-ui/icons";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({
  // displayName,
  // username,
  // verified,
  // timestamp,
  // text,
  // image,
  // avatar,

  profile_image_url,
  name,
  screen_name,
  verified,
  created_at,
  text,
  image,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={profile_image_url} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {name}{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @{screen_name}{" "}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
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
