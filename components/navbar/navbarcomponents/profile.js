import * as React from 'react';
import { useAuth } from "../../../pages/api/auth";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';


const  Profile = () => {
    const { user, loading, signOut } = useAuth();

    const [anchorElUser, setAnchorElUser] = React.useState(null);
 
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      
      <>
        {user ? ( 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt ={user.email} src="/favicon.ico"/>
                </IconButton>
            </Tooltip> 
            
           

            <Menu
              sx={{ mt: '50px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
            
            <MenuItem >       
              <a href="/user">profile</a>
            </MenuItem>
            <MenuItem>
              <a onClick={signOut}>log out</a>
            </MenuItem>
           
                
            </Menu> 
          </Box> 
        ) : 
        (<>
          
          <Button href="/signup" variant="outlined">sign-up</Button>
          /
          <Button href="/login"variant="outlined">log-in</Button>
         </>)
            }</> )
}

export default Profile;
