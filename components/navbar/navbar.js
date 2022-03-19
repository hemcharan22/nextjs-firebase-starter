import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import reactDom from 'react-dom'



import Logo from './navbarcomponents/logo'
import MobileLogo from './navbarcomponents/mobile/logo'
import Mobilepages from './navbarcomponents/mobile/pages'
import Pages from './navbarcomponents/pages'
import Profile from './navbarcomponents/profile'

import { useState, useEffect } from 'react';

import useWindowSize from './windowsize' //custom hook for getting screen width size because window doesnt exist on node

const ResponsiveAppBar = () => {
  const size = useWindowSize();
  return (
    <AppBar position="static" sx={{  background: 'white' , boxShadow: "none", maxHeight:"80px"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters> 
          
        
          {/* using ternary operator if screenwidth > 900px desktop view else mobile view */}
           { size.width > 900  ? (
            <>
              <Logo/> < Pages/> <Profile/> 
            </>

            ) : (

            <> 
              < Mobilepages/> < MobileLogo/> <Profile/> 
            </>
          
          ) }
        </Toolbar>
      </Container> 
    </AppBar>
  )}

export default ResponsiveAppBar;
