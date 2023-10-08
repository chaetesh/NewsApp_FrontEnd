import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  let { title, description, photo, newsUrl, createdAt } = props;

  return (
    <div className="my-3">
      <Link to={newsUrl} target="_blank" style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia component="img" height="300" image={photo} alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}...
              </Typography>
              <p>{description.length > 10 ? description.substr(0,40):description}....</p>
              <Typography variant="body2" color="text.secondary">
                Last Updated {new Date(createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default NewsItem;
