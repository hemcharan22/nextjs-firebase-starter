import Typography from '@mui/material/Typography';
import Image from 'next/image'


const Logo = () => {
  return (
    <>
      <Image 
        src='/logo.svg'
        alt="Picture of the author" 
        width={200}  
        height={50}
        />

      {/* <Typography 
        variant="h6" 
        sx={{ m: 1.5 }}
        color="palette.secondary.light"
      >COMPANIAN </Typography> */}
    </>

  )
 }

export default Logo;