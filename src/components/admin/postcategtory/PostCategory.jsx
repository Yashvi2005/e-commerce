import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

const theme = createTheme();

export default function PostCategory() {
const [categoryName , setCategory] = React.useState()
const [catImg , setCatimg] = React.useState()
const fd = new FormData()

const data = {categoryName , catImg}
  const onHandlePost = async (e) => {
    e.preventDefault();
    fd.append("categoryName" , categoryName)
    fd.append("catImg" , catImg)
    await axios.post(`http://localhost:9328/api/v1/categroy/postCategory` , fd)
    .then((result)=>{
      console.log(result , "result")
       })
       .catch((error)=>{
        console.log(error , "error")
       })
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#fff", mt: "5rem" }}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{ backgroundColor: "#fff" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Post Category
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Button variant="contained" sx={{ width: "100%" }}>
                <input
                  type="file"
                  onChange={(e) => setCatimg(e.target.files[0])}
                />{" "}
                choose pic
              </Button>

              <TextField
                margin="normal"
                required
                fullWidth
                name="category_name"
                label="category_name"
                type="text"
                id="title"
                value={categoryName}
                onChange={(e)=>setCategory(e.target.value)}
              />

             

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onHandlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
