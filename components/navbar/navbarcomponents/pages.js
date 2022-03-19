import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

// import Typography from '@mui/material/Typography';
// import { Link } from '@mui/material';
// import Popover from '@mui/material/Popover'; uncomment for dropdown style button

// seemore button in navbar not yet finished

// function BasicPopover() {
//    const [anchorEl, setAnchorEl] = React.useState(null);
 
//    const handleClick = (event) => {
//      setAnchorEl(event.currentTarget);
//    };
 
//    const handleClose = () => {
//      setAnchorEl(null);
//    };
 
//    const open = Boolean(anchorEl);
//    const id = open ? 'simple-popover' : undefined;
 
//    return (
//      <div>
//        <Button aria-describedby={id}  onClick={handleClick}>
//          Open Popover
//        </Button>
//        <Popover
//          id={id}
//          open={open}
//          anchorEl={anchorEl}
//          onClose={handleClose}
//          anchorOrigin={{
//            vertical: 'bottom',
//            horizontal: 'left',
//          }}
//        >
//          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
//        </Popover>
//      </div>
//    );
//  }
 
const pages = ['Find Schools','Admissions','About', 'Blog'];

const Pages = () => {
  return (
    <Box 
     sx={{ flexGrow: 1, display: { md: 'flex' } }}
     >  
        {pages.map((page) => (
        <Button style={{textTransform: 'none'}}  href = {`${page}`} underline= "none" sx={{ mx: 1.3 , pt : 1.8}}>
           <a> {page}</a>
        </Button>
        
        ))}
        {/* < BasicPopover/> see more in dropdown style navbar */}
    </Box> 
    ) 
}

export default Pages
