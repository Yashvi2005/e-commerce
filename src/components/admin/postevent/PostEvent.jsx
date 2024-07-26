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

export default function PostEvent() {
  const [productName, setProductName] = React.useState();
  const [price, setPrice] = React.useState();
  const [description, setDescrition] = React.useState();
  const [categoryId, setCategoryId] = React.useState();
  const [porductImg, setProductImg] = React.useState();
  const [data, setData] = React.useState("");
  const fd = new FormData();

  React.useEffect(() => {
    axios
      .get(`http://localhost:9328/api/v1/categroy/getCategory`)
      .then((result) => {
        console.log(result);
        setData(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data, "data");

  
  const onHandlePost = async (e) => {
    e.preventDefault();
    fd.append("productName", productName);
    fd.append("price", price);
    fd.append("description", description);
    fd.append("categoryId", categoryId);
    fd.append("porductImg", porductImg);
    await axios
      .post(`http://localhost:9328/api/v1/product/postProduct`, fd)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error, "error");
      });
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
              Post Product
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Button variant="contained" sx={{ width: "100%" }}>
                <input
                  type="file"
                  onChange={(e) => setProductImg(e.target.files[0])}
                />{" "}
                choose pic
              </Button>

              <TextField
                margin="normal"
                required
                fullWidth
                name="productName"
                label="productName"
                value={productName || ""}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                id="title"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="price"
                value={price || ""}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                // id="url"
              />

              <FormControl fullWidth sx={{ mt: "0.4rem" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Product Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryId}
                  label="Select Event Category"
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {data
                    ? data.map((ele, i) => {
                        return (
                          <MenuItem key={i} value={ele._id}>
                            {ele.categoryName}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="description"
                value={description || ""}
                onChange={(e) => setDescrition(e.target.value)}
                type="text"
                // id="url"
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
