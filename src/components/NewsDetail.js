import { Box, Typography,styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "contain",
});

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
`;

const NewsDetail = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/fechdetails/${id}`
        );
        if(response.status === 200){
          setPost(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Image src={post.photo} alt="image loading...." />
      <Heading style={{fontSize:'3rem'}}>{post.title}</Heading>

      <Typography style={{ marginLeft: "auto" }}>
        {new Date(post.createdAt).toDateString()}
      </Typography>

      <Typography className="my-5" style={{whiteSpace:'pre-line',fontSize:'1.5rem'}}>{post.description}</Typography>
    </Container>
  );
};

export default NewsDetail;
