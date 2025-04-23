import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    var[input,setInput] = useState({})
    const inputHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    const addHandler = ()=>{
        console.log("clicked")
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
            Already a User?<Link to={"/login"}>Login</Link>
          </Typography>
          <Button variant="contained" onClick={addHandler} sx={{ margin: 3 }}>
            submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp
