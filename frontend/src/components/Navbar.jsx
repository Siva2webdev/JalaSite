import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiryTime');
    // Perform logout actions here (e.g., clear localStorage)
    // For demonstration, simply redirect to the login page
    navigate('/');
  };
  const isTokenExpired = () => {
    const expiryTime = localStorage.getItem('expiryTime');
    if (!expiryTime) return true; // Token not found, consider expired
    return new Date().getTime() > parseInt(expiryTime); // Check if current time is greater than expiry time
  };
  const isAuthenticated = !isTokenExpired();

useEffect(() => {
  if (!isAuthenticated) {
    navigate('/');
  }
}, [isAuthenticated, navigate]);
  return (
    <Box sx={{ marginLeft: { xs: '0', sm: '240px' },}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JALA
          </Typography>
          {isAuthenticated ? (
      <Button sx={{ color: 'White', fontWeight:"bold" }} onClick={handleLogout}>Logout</Button>
    ) : (
      <p>Please login to access this feature.</p>
    )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
