import { Box, Button, Card, TextField, TextareaAutosize, Typography } from '@mui/material'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (<>
    <Box sx={{ display: "flex", justifyContent: "space-around", flexFlow: 'wrap', margin: 5 }}>

      <Card sx={{
        minWidth: 100, maxWidth: 400, width: 400, margin: 1, display: "flex",
        padding: 3,
        border: '1px solid #ccc',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}>
        <ContactPageIcon sx={{ display: 'flex', alignSelf: 'center', marginRight: 2 }} color='secondary' />
        <Box sx={{ fontWeight: 500 }}>Phone
          <Box sx={{ fontSize: 12 }}>+92 315 7055586</Box>
        </Box>
      </Card>
      <Card sx={{
        minWidth: 100, maxWidth: 400, width: 400, margin: 1, display: "flex",
        padding: 3,
        border: '1px solid #ccc',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}>

        <ContactPageIcon sx={{ display: 'flex', alignSelf: 'center', marginRight: 2 }} color='secondary' />
        <Box sx={{ fontWeight: 500 }}>Email
          <Box sx={{ fontSize: 12 }}>saadzafar649@gmail.com</Box>
        </Box>
      </Card>
      <Card sx={{
        minWidth: 100, maxWidth: 400, width: 400, margin: 1, display: "flex",
        padding: 3,
        border: '1px solid #ccc',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}>

        <ContactPageIcon sx={{ display: 'flex', alignSelf: 'center', marginRight: 2 }} color='secondary' />
        <Box sx={{ fontWeight: 500 }}>Address
          <Box sx={{ fontSize: 12 }}>94/7 Street Faisalabad</Box>
        </Box>
      </Card>
    </Box>

    <Box sx={{ display: "flex", justifyContent: "center", margin: 5 }}>
      <Card sx={{
        minWidth: 200, maxWidth: 900, width: 900,
        border: '1px solid #ccc', borderRadius: 1,
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 3
      }}>

        <Box sx={{ fontWeight: 500, margin: 3, display: 'flex', flexFlow: 'column', }}>
          <Typography variant="h5" component="h5" sx={{ fontWeight: 700, marginX: 4 }}>
            Get in Touch
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", flexFlow: 'wrap', margin: 2 }}>
            <TextField id="name" label="Name" variant="outlined" size="small"
              sx={{ marginTop: 4, marginX: 2 }} />
            <TextField id="email" label="Mail" variant="outlined" size="small"
              sx={{ marginTop: 4, marginX: 2 }} />
            <TextField id="phone" label="Phone" variant="outlined" size="small"
              sx={{ marginTop: 4, marginX: 2 }} />
          </Box>
          
          <Box sx={{ display: "flex", justifyContent: "space-between", flexFlow: 'wrap', margin: 4 }}>
            <TextareaAutosize
              minRows={3}
              placeholder="Message"
              style={{ maxWidth: 800,width:800,minWidth:100,borderRadius:3,height:200 }}
            />
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", flexFlow: 'wrap', margin: 4 }}>
        <NavLink className="nav-link " aria-current="page" to="/login" sx={{ margin: 2, display: 'flex',justifySelf:'center' }}>
            <Button key={1} color="primary" variant='contained' size='large'>
              Send Message
            </Button>
          </NavLink>
        </Box>
          </Box>
      </Card>
    </Box>
  </>
  )
}

export default Contact