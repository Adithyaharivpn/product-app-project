import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const SignUp = () => {
    var[input,setInput] = useState({})
    var navigate = useNavigate()
    var baseurl = import.meta.env.VITE_API_BASE_URL;

    const inputHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    const addHandler = ()=>{
        console.log("clicked");
        axios
          .post(`${baseurl}/api`, input)
          .then((res) => {
            console.log(res.data);
            alert(res.data.message)
            navigate('/')
          
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
    <div>
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
          <Typography variant="h3" sx={{ color: "black" }}>
            SignUp
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Fullname"
            variant="outlined"
            name="fname"
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            name="email"
            onChange={inputHandler}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            onChange={inputHandler}
          />
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Already a User?<Link to={"/"}>Login</Link>
          </Typography>
          <Button fullWidth variant="contained" onClick={addHandler} >
            submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp
