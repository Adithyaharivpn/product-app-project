import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const Login = () => {
    var[input,setInput] = useState({})
    const inputHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    const addHandler = ()=>{
        console.log("clicked")
    }
  return (
    <div style={{ paddingLeft: 425 }}>
      <Box
        component="form"
        sx={{
          padding: 2,
          backgroundColor: "white",
          boxShadow: 3,
          marginTop: 11,
          width: 400,
          alignContent: "center",
          borderRadius: 2,
        }}
      >
        <div>
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
            submit
          </Button>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            New here?
            <Link to={'/'}>Create an account</Link>
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default Login
