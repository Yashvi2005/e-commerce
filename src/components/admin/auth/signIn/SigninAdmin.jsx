



// ------------------------------------------------------------------------


import * as React from 'react';
import { useEffect,useMemo, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSigninMutation } from '../../../../services/admin';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function SigninAdmin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    };
    
// --------------------------//Auth code---------------------

const [email,setEmail] = useState()
const [password, setPassword] = useState()
const [iq ,setIq] = useState(true)
const [responseInfo, { data , isError, isSuccess,message }] = useSigninMutation();

  
  const navigate = useNavigate();
  
  const handleClick = async () => {
    console.log(email,password,'sdksjd')
  const ab = JSON.stringify({ email, password });

    if (email && password) {
      alert('done')
        await responseInfo(ab)
    } else {
        alert('Please Fill up the Form')
    }
    console.log(data,'data')
}
useEffect(() => {
    if (isSuccess === true) {            
        if (data.success !== undefined ){
            setIq(data.success === 0);
            console.log(data.success === 0, 'error')
            console.log(data, 'respones')
        }
        console.log(data, 'Reafsdfsd')
        if (iq === false) {
            navigate('/admin/userlist');
            localStorage.setItem('adminUserId',data.details.id)
          localStorage.setItem('adminUserName', data.details.name)
          navigate(0);
        } else {
        }
     } else {            
    }
}, [isSuccess,data,iq])
  console.log(data,'data')
    // --------------------------//Auth code end here---------------------


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{backgroundImage: 'url(https://rb.gy/rgi65)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                              autoComplete="email"
                              value={email || ''} onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                              id="password"
                              value={password || ''} 
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
              onClick={(e)=>{handleClick(e.preventDefault())}}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgotpass" variant="body2" style={{cursor:'pointer'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/admin/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}