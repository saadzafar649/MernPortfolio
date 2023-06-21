import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo2.png'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
require('bootstrap')

const drawerWidth = 240;
const navItems = [
  ["Home", "/"],
  [ "About","about"],
  ["Contact","contact" ],
  ["Login","login" ],
  ["Registration","signup" ],

];


const Navbar = () => {


  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} alt="logo" style={{ height: 60 }}></img>
      <Divider />
      <List>
        {navItems.map((item) => (

          <NavLink className="nav-link active" aria-current="page" to={item[1]}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>{item[0]}
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (<>
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" ,maxHeight:'65px',minHeight:'65px'}}>
        <img src={logo} alt="logo" style={{ height: 60 }}></img>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            
          <Button key={item} sx={{ color: '#fff' }}>
          <NavLink className="nav-link active" aria-current="page" to={item[1]}>
          {item[0]}
        </NavLink>
          </Button>
          ))}
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>


    </AppBar>

  </>);





  // return (
  //   <>
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //       <div className="container-fluid">
  //         <NavLink className="navbar-brand" style={{ height: 60 }} to="/">
  //           <img src={logo} alt="logo" className='h-100'></img>
  //         </NavLink>
  //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="navbar-collapse collapse " id="navbarSupportedContent">
  //           <ul className="navbar-nav ms-auto">
  //             <li className="nav-item">
  //               <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link active" aria-current="page" to="/signup">Registration</NavLink>
  //             </li>

  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // )
}

export default Navbar