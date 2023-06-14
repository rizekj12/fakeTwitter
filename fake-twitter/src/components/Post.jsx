// create reusable component for posts

//import post data

const Post = ({ post }) => {
  const { created_at, id, text, user } = post;

  return (
    <div className="post">
      <div className="post-header">
        {user.profile_image_url && (
          <img
            src={user.profile_image_url}
            alt="Profile"
            className="profile-image"
          />
        )}
        <div className="user-info">
          <a
            href={`https://twitter.com/${user.screen_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.name}
          </a>
          <span>{user.location}</span>
        </div>
      </div>
      <div className="post-content">{text}</div>
      <div className="post-date">{created_at}</div>
    </div>
  );
};

export default Post;
