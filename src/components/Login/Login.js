import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Grid, FormControlLabel, Checkbox, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { createTheme } from '@mui/material/styles';


const theme = createTheme();



const LoginPage = () => {
  // const classes = useStyles();
  const [Email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials for demonstration purposes
    const correctEmail = "Sivareddy@jalaacademy.com";
    const correctPassword = "Sivareddy@123";

    // Check if entered email and password match the correct credentials
    if (Email === correctEmail && password === correctPassword) {
      // Successful login
      console.log('Login successful');

      const token = generateToken();

    // Store token and expiry time in localStorage
    const expiryTime = new Date().getTime() + 3600000; // 1 hour expiry
    localStorage.setItem('token', token);
    localStorage.setItem('expiryTime', expiryTime);
    console.log(token)

      // Reset input fields
      setEmail('');
      setPassword('');
      setRememberMe(false);

      // Save token to local storage
      // localStorage.setItem('token', token);

      // Navigate to the dashboard
      navigate('/Home');
    } else {
      // Invalid credentials
      setError("Invalid, try to Login With Above Credentials");
      console.log('Invalid email or password');
    }
  };
  // Function to generate a random token (for demonstration purposes)
const generateToken = () => {
  return Math.random().toString(36).substr(2); // Generate a random alphanumeric string
};

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      }} >
      <Typography fontSize={30} fontWeight={"bolder"} marginTop={0}>
        JALA Academy
      </Typography>
      <Typography fontSize={19} fontWeight={"bold"}>
        Use the Below Credentials to Login
      </Typography>
      <Typography>
        Email: Sivareddy@jalaacademy.com
      </Typography>
      <Typography>
        Password: Sivareddy@123
      </Typography>
      <Typography backgroundColor={"yellow"} fontWeight={"bold"} margin={3}>
        Learn Everything on Real-Time Scenarios. Free for All
      </Typography>
      <Box sx={{width: '300px', // Adjust the width as needed
    padding: theme.spacing(3),
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    textAlign: "center",}}  >
        <div >
          <Typography variant='h5' fontWeight={"bold"}>
            Signin
          </Typography>
          <TextField
            required
            id="email"
            label="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: <AccountCircleIcon />,
            }}
          />
        </div>
        <div >
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: <LockIcon />,
            }}
          />
        </div>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember Me"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Signin
            </Button>
          </Grid>
        </Grid>
        {error && <Typography color="Red" fontWeight={"bold"}>{error}</Typography>}
        <Typography>
          --OR--
        </Typography>
        <Button variant='contained' fullWidth>
          Forgot Password
        </Button>
        <Button>Admin Login</Button>
      </Box>
      <Typography sx={{

      marginTop: { xs: '0', sm: '115px' },      }} backgroundColor={"lightblue"} textAlign={"center"}>
      JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’ experience on Full Stack Development / Automation Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be completely on live Project scenarios Read our website JALA Academy for more details : https://jalaacademy.com/
      </Typography>
    </Box>
  );
};

export default LoginPage;
