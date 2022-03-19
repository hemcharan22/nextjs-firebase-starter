import Typography from '@mui/material/Typography';

function MobileLogo() {
  return (
 
    <Typography variant="h6" 
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } , color: 'black'}}>
        LOGO
    </Typography>
 
  )
 }

export default MobileLogo;