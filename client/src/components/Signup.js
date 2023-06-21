import { Box, Card, CardActions, FormControl, TextField, Typography, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Mail from '@mui/icons-material/Mail';
import Phone from '@mui/icons-material/Phone';
import Password from '@mui/icons-material/Password';
import PasswordTwoTone from '@mui/icons-material/PasswordTwoTone';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
// import '@mui/icons-material/index'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflow: 'clip', margin: 5 }}>

      <Card sx={{ minWidth: 200, maxWidth: 800, width: 600, display: 'flex', justifyContent: "center", flexFlow: 'wrap',  
        border: '1px solid #ccc', borderRadius: 1,
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingBottom:3,paddingTop:3, 
        }}>
          <Typography variant="h5" component="h5" sx={{ fontWeight: 700 }}>
            SignUp
          </Typography>
        <FormControl variant="standard" sx={{ fontWeight: 400, margin: 5, display: 'flex', justifySelf: "center", }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="name" label="Name" variant="standard" sx={{ width: 400 }} />
          </Box>


          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <Mail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="email" label="Email" variant="standard" type='email' sx={{ width: 400 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <Phone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="phone" label="Phone" variant="standard" type='phone' sx={{ width: 400 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <SmartDisplayIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="profession" label="Profession" variant="standard" sx={{ width: 400 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <PasswordTwoTone sx={{mr: 1, my: 0.5 }} />
            <TextField id="password" label="Password" variant="standard" type='password' sx={{ width: 400 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2 }}>
            <Password sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="cpassword" label="ConfirmPassword" variant="standard" type='password' sx={{ width: 400 }} />
          </Box>
        </FormControl >
        <CardActions>

          <NavLink className="nav-link " aria-current="page" to="/login" sx={{ margin: 2, display: 'flex',justifySelf:'center' }}>
            <Button key={1} color="primary" variant='contained' size='large'>
              Register
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Signup