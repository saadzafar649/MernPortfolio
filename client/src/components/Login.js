import { Box, Card, CardActions, FormControl, TextField, Typography, Button } from '@mui/material';
import Mail from '@mui/icons-material/Mail';
import PasswordTwoTone from '@mui/icons-material/PasswordTwoTone';
// import '@mui/icons-material/index'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { React, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "", password: ""
  })
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  let postData = async (e) => {
    const { name, email, phone, work, password, cpassword } = user

    const res = await fetch("/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();

    if (!data || res.status === 404 || res.status === 500 || res.status === 422 || res.status === 400) {
      window.alert(data.error)
    } else {
      window.alert('user Logged in')
      navigate('/')
    }
  }



  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflow: 'clip', margin: 5 }}>

      <Card sx={{
        minWidth: 200, maxWidth: 800, width: 600, display: 'flex', justifyContent: "center", flexFlow: 'wrap',
        border: '1px solid #ccc', borderRadius: 1,
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: 3, paddingTop: 3,
      }}>
        <Typography variant="h5" component="h5" sx={{ fontWeight: 700 }}>
          SignIn
        </Typography>
        <FormControl variant="standard" sx={{ fontWeight: 400, margin: 5, display: 'flex', justifySelf: "center", }}>


          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <Mail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField onChange={handleInputs} name="email" label="Email" variant="standard" type='email' sx={{ width: 400 }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <PasswordTwoTone sx={{ mr: 1, my: 0.5 }} />
            <TextField onChange={handleInputs} name="password" label="Password" variant="standard" type='password' sx={{ width: 400 }} />
          </Box>
        </FormControl >
        <CardActions>

          <NavLink className="nav-link " aria-current="page" to="/login" sx={{ margin: 2, display: 'flex', justifySelf: 'center' }}>
            <Button onClick={postData} key={1} color="primary" variant='contained'>
              Login
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Login