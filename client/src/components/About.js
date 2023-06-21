import { Box, Card, Typography, Button, useTheme, Table, TableRow, TableCell } from '@mui/material'
import { alpha } from '@mui/material';
import logo from '../images/logo2.png'
import React from 'react'

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", overflow: 'clip', margin: 5 }}>

        <Card sx={{
          minWidth: 200, maxWidth: 800, width: 700, display: 'flex', justifyContent: 'space-around', flexFlow: 'wrap',
          border: '1px solid #ccc', borderRadius: 1,
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          paddingBottom: 3, paddingTop: 3,
        }}>
          <Box sx={{
            border: '2px solid #555', borderRadius: 1,
            margin: 3,
          }}>
            <img src={logo} alt="logo" style={{ height: 150, width: 150, objectFit: 'cover  ' }}></img>
          </Box>

          <Box sx={{
            display: 'flex', justifyContent: 'space-between', flexFlow: 'column',
            maxWidth: 400, width: 400, minWidth: 50,
            maxheight: 50
          }}>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', flexFlow: 'row',
              margin: 3
            }}>

              <Box>
                <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                  Saad Zafar
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'primary.main' }}>
                  Full Stack Developer
                </Typography>
              </Box>

              <Box sx={{
              }}>
                <Button variant="text"
                  sx={{
                    color: "primary.main",
                    backgroundColor: alpha(theme.palette.primary.main, 0.2)
                  }}>
                  Edit Profile
                </Button>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', flexFlow: 'row',
              margin: 3,
              border: '2px solid red', borderRadius: 1,
              height: 50, maxheight: 100,
            }}>
            </Box>
          </Box>

          <Box sx={{
            border: '2px solid #555', borderRadius: 1,
            margin: 3
          }}>
            <img src={logo} alt="logo" style={{ height: 200, width: 150, objectFit: 'cover  ' }}></img>
          </Box>


          <Box sx={{
            display: 'flex', justifyContent: 'space-between', flexFlow: 'column',
            maxWidth: 400, width: 400, minWidth: 50,
            maxheight: 50
          }}>
            <Table sx={{ borderCollapse: 'collapse' }}>
              <TableRow sx={{
                '&:not(:last-child) td': {
                  borderBottom: 'none',
                }
              }}>
                <TableCell>User ID</TableCell>  <TableCell>1234</TableCell>
              </TableRow>
              <TableRow sx={{
                '&:not(:last-child) td': {
                  borderBottom: 'none',
                }
              }}>
                <TableCell>Name</TableCell>  <TableCell>Saad Zafar</TableCell>
              </TableRow>
              <TableRow sx={{
                '&:not(:last-child) td': {
                  borderBottom: 'none',
                }
              }}>
                <TableCell>Email</TableCell>  <TableCell>saadzafar649@gmail.com</TableCell>
              </TableRow>
              <TableRow sx={{
                '&:not(:last-child) td': {
                  borderBottom: 'none',
                }
              }}>
                <TableCell>Phone</TableCell>  <TableCell>+92 315 7055586</TableCell>
              </TableRow>
              <TableRow sx={{
                '&:not(:last-child) td': {
                  borderBottom: 'none',
                }
              }}>
                <TableCell>Profession</TableCell>  <TableCell>Full Stack Developer</TableCell>
              </TableRow>
            </Table>
          </Box>

        </Card>

      </Box>
    </>
  )
}

export default About 