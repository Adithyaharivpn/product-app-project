import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import SignUp from './SignUp'
import axios from 'axios'

const Login = () => {
    var[input,setInput] = useState({})
    var baseurl = import.meta.env.VITE_API_BASE_URL;
    const inputHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    const addHandler = ()=>{
        console.log("clicked")
        axios
          .post(`${baseurl}/api/login`, input)
          .then((res) => {
            alert(res.data.message)
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
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
        <Typography variant="h4" sx={{ color: "black" }}>
          Welcome to Product App
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Please login to continue
        </Typography>
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
        <Button variant="contained" onClick={addHandler} fullWidth>
          Login
        </Button>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          New here?
          <Link to={"/signup"}>Create an account</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login
