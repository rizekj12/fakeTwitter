import { Card, CardContent, CardMedia } from "@mui/material";

const Feed = () => {
  return (
    <Card>
      <div>
        <CardMedia className="profile"></CardMedia>
        <CardContent></CardContent>
      </div>
      <CardMedia className="image"></CardMedia>
    </Card>
  );
};

export default Feed;
