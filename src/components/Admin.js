import axios from "axios";
import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import {
  styled,
  Box,
  TextareaAutosize,
  Button,
  InputBase,
  FormControl,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom/dist";

const initialPost = {
  title: "",
  description: "",
  photo: "",
  district: "general",
};

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

// const Textarea = styled(TextareaAutosize)`
//   width: 100%;
//   height: 150px !important;
//   margin-top: 50px;
//   border-radius: 15px;
//   margin-bottom: 50px;
//   font-size: 18px;
//   &:focus-visible {
//     outline: none;
//   }
// `;

const Admin = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await axios.post(
          "http://localhost:5000//file/upload",
          data
        );
        console.log(response);
        setPost({ photo: response.data });
      }
    };
    getImage();
  }, [file]);

  const url = post.photo;

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await axios.post("http://localhost:5000/addnews", post);
    navigate("/");
  };

  return (
    <Container>
      {post.photo ? <Image src={url} alt="Add Photo" /> : "Click to add Photo"}

      <StyledFormControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" color="action" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputTextField
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="News Title"
        />
      </StyledFormControl>

      {/* <Textarea
        placeholder="Enter the News....."
        name="description"
        onChange={(e) => handleChange(e)}
      /> */}
      <Box
        sx={{
          minWidth: 120,
          marginBottom: "50px",
          border: "none",
          marginTop: "50px",
        }}
      >
        <TextField
          fullWidth
          multiline
          label="Enter News.."
          id="fullWidth"
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <Box sx={{ minWidth: 120, marginBottom: "50px", border: "none" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">District</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={post.district}
            label="district"
            name="district"
            onChange={handleChange}
          >
            <MenuItem value={"krishna"}>Krishna</MenuItem>
            <MenuItem value={"eluru"}>Eluru</MenuItem>
            <MenuItem value={"guntur"}>Guntur</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button onClick={() => savePost()} variant="contained">
        Publish
      </Button>
    </Container>
  );
};

export default Admin;
