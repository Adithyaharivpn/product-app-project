import { Box, Button, Divider, FormControlLabel, MenuItem, Select, Switch, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [input, setInput] = useState({
    pname: "",
    price: "",
    description: "",
    stock: "",
    images: [],
  });
  var location = useLocation();
  var navigate = useNavigate();
  var baseurl = import.meta.env.VITE_API_BASE_URL;
  useEffect(()=>{
    const {pro} = location.state ?? {};
    if(location.state !== null){
      setInput({
        pname:pro.pname || "",
        price:pro.price || "",
        stock:pro.stock || "",
        description:pro.description || "",
        images:[]
      })
    }
  },[location.state])
  const inputHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const setHandler = () => {
    const formdata = new FormData();
    formdata.append("pname", input.pname);
    formdata.append("price", input.price);
    formdata.append("description", input.description);
    formdata.append("stock", input.stock);
    input.images.forEach((file) => {
      formdata.append("images", file);
    });
    if(location.state !== null)
    {    
      var id = location.state.pro._id
      axios
      .put(`${baseurl}/p/update/${id}`, formdata)
      .then((res) => {
        alert(res.data.message);
        navigate('/product')
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      axios
      .post(`${baseurl}/p`, formdata)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  };
  return (
    <div style={{margin:7}}>
    <Button variant="contained">
    <Link to="/details" style={{ textDecoration: "none", color: "white"}}>
      Product Details
    </Link>
  </Button>



    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        sx={{
          p: 3,
          backgroundColor: "white",
          boxShadow: 3,
          width: { xs: "70%", sm: 400 },
          borderRadius: 2,
        }}
      >
        <div>
          <Typography variant="h3" sx={{ color: "black" }}>
            Product Form
          </Typography>
          <Divider />
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
            name="pname"
            value={input.pname}
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            type="number"
            variant="outlined"
            name="price"
            value={input.price}
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            variant="outlined"
            name="description"
            value={input.description}
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Stock"
            type="number"
            variant="outlined"
            name="stock"
            value={input.stock}
            onChange={inputHandler}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Category"
            select
            variant="outlined"
            name="category"
            onChange={inputHandler}
          >
            <MenuItem value={"10"}>test</MenuItem>
            <MenuItem value={"20"}>test</MenuItem>
            <MenuItem value={"30"}>test</MenuItem>
          </TextField>
          <FormControlLabel
            control={<Switch defaultChecked color="warning" />}
            label="Available"
            sx={{ color: "black" }}
          />
          <Button variant="outlined" component="label">
            Upload images
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              // onChange={(e)=>{
              //   setInput({...input,images:Array.from(e.target.files)})
              // }}//loses values
              onChange={(e) => {
                const files = Array.from(e.target.files);
                setInput((prev) => ({
                  ...prev,
                  images: files,
                }));
              }} //stores prvious states
            />
          </Button>
          <Typography variant="caption" display="block" color="black">
            {input.images.length} file(s) selected
          </Typography>
          <Button fullWidth variant="contained" onClick={setHandler}>
            submit
          </Button>
        </div>
      </Box>
    </Box>
    </div>
  );
};

export default Admin;
