import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Youtube E-com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Default theme (kept unchanged)
const defaultTheme = createTheme();

export default function SignInSide() {
  const[check,setCheck]=React.useState(false)
  let remember_val=check?"remember":"not remember"
  let navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, remember } = event.target;
    let data = {
      email: email.value,
      password: password.value,
      remember:remember.value
    };

    try {
      const res = await axios.post('https://youtube-e-com-backend.onrender.com/login', data);
      console.log(res);
      if (res.data === 'ok') {
        toast('WELCOME 🙏', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          navigate('/home');
          window.location.reload();
        }, 1800);
      } else {
        toast.error('INVALID EMAIL OR PASSWORD', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("https://cdn.dribbble.com/users/1369921/screenshots/3699553/yt-new-button-yoodle.gif")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#282c34',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ background: 'linear-gradient(to bottom, #3f51b5, #9c27b0)' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              p: 4,
            }}
          >
            <Avatar
              alt="Logo"
              src="https://media.tenor.com/q3NBbq09nuYAAAAC/youtube-logo.gif"
              sx={{ width: 80, height: 80, mb: 2 }}
            />
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              Sign in
            </Typography>

            {/* form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ borderRadius: '8px', backgroundColor: '#f5f5f5' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ borderRadius: '8px', backgroundColor: '#f5f5f5' }}
              />
              <FormControlLabel
                control={<Checkbox checked={check} name="remember" value={remember_val} onChange={()=>setCheck(p=>!p)} color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: '8px', textTransform: 'none', backgroundColor: '#3f51b5', ':hover': { backgroundColor: '#303f9f' } }}
              >
                Sign In
              </Button>
              <Grid container className='mt-5'>
                <Grid item lg>
                  <Link href="forgot-password" variant="body1" sx={{ color: '#3f51b5' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body1" sx={{ color: '#3f51b5' }}>
                    Don't have an account? Sign Up
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
