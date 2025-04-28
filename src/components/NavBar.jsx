import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [role,setRole] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const savedRole = sessionStorage.getItem('role');
    setRole(savedRole);
  },[])
  const handleLogout = ()=>{
    sessionStorage.clear();
    navigate('/')
  }
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product App
          </Typography>
          <Button color="inherit"><Link to={'/'} style={{color:'white'}} >login</Link></Button>
          {role === 'admin' &&(
            <Button color="inherit" ><Link to={'/admin'} style={{color:'white'}}>admin</Link></Button>
        )}
        {role &&(
            <Button color="inherit" onClick={handleLogout}>Log Out</Button>
        )}
          <Button color="inherit" ><Link to={'/product'} style={{color:'white'}}>products</Link></Button>
          <Button color="inherit" ><Link to={'/signup'} style={{color:'white'}}>signup</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
