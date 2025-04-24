import { Box, Button, Divider, FormControlLabel, MenuItem, Select, Switch, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Admin = () => {
  const [input, setInput] = useState({
    pname: "",
    price: "",
    description: "",
    stock: "",
    images: [],
  });
      var baseurl = import.meta.env.VITE_API_BASE_URL;
      const inputHandler = (e)=>{
          setInput({...input,[e.target.name]:e.target.value})
          console.log(input)
      } 

      const setHandler = ()=>{
        const formdata = new FormData();
        formdata.append("pname.input",input.pname)
        formdata.append("price.input",input.price)
        formdata.append("description.input",input.description)
        formdata.append("stock.input",input.stock)
        input.images.forEach((file)=>{
          formdata.append('images',file)
        })
        axios
        .post(`${baseurl}/p`,formdata)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message)
        
        })
        .catch((error) => {
          console.log(error);
        })
      }
  return (
    <div style={{ paddingLeft: 420 }}>
      <Box
        component="form"
        sx={{
          padding: 2,
          backgroundColor: "white",
          boxShadow: 3,
          marginTop: 4,
          width: 400,
          display: "flex",
          alignContent: "center",
          borderRadius:2
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
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            type="number"
            variant="outlined"
            name="price"
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            variant="outlined"
            name="description"
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Stock"
            type="number"
            variant="outlined"
            name="stock"
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
            <MenuItem value={10}>test</MenuItem>
            <MenuItem value={20}>test</MenuItem>
            <MenuItem value={30}>test</MenuItem>
          </TextField>
          <FormControlLabel control={<Switch defaultChecked color="warning"/>} label="Available" sx={{color:'black'}}/>
          <Button variant='outlined' component='label'>
            Upload images
            <input
            type='file'
            hidden
            multiple
            accept='image/*'
            onChange={(e)=>{
              setInput({...setInput,images:Array.from(e.target.files)})
            }}
            />
          </Button>
          <Button fullWidth variant="contained" onClick={setHandler}>
            submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Admin
