import { Box, Stack, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/material';
import React from 'react'

const Home = () => {
  const theme = useTheme();

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <>
      <Stack>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ backgroundColor: alpha(primaryColor, 0.2), width: '49vw', height: 'calc(100vh - 65px)' }}>

          </Box >
          <Box sx={{ backgroundImage: `linear-gradient(to right,${alpha(primaryColor, 0.2)},${alpha(secondaryColor, 0.1)})`, width: '2vw', height: 'calc(100vh - 65px)' }}>
          </Box>
          <Box sx={{ backgroundColor: alpha(secondaryColor, 0.1), width: '49vw', height: 'calc(100vh - 65px)' }}>

          </Box>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column',
          width: '100vw', height: 'calc(100vh - 65px)', position: 'absolute'
        }}>
          <Typography sx={{ fontSize: 20, fontWeight: 700, color: 'primary.main' }}>
            Welcome
          </Typography>
          <Typography sx={{
            display: 'flex', textAlign: 'center', alignContent: 'center',
            fontSize: 30, fontWeight: 700, color: 'secondary.main'
          }}>
            WE are the MERN Developers
          </Typography>
        </Box>
      </Stack>

    </>
  )
}

export default Home