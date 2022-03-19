import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';


export  function ImgMediaCard() {
  return (
    <Box >
    <Card sx={{ maxWidth: 300 , m: 2 , border: "1px solid #80b3e6", borderRadius: 3}} >
      <CardMedia
        component="img"
        height="200"
        image="https://www.joonsquare.com/usermanage/image/business/shree-niketan-matriculation-higher-secondary-school-tiruvallur-10034/shree-niketan-matriculation-higher-secondary-school-tiruvallur-snms-1.jpg"
      />

      <CardContent>
        <Typography  variant="h6"> shree niketan </Typography>
        <Typography  variant="body2"> thiruvellore, manavalanagar </Typography>

        <br></br>
        
        <Typography variant="body2" color="text.secondary" sx={{maxHeight: "60px" , overflow : "hidden"}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarcticajvvgadcvcadvgjdbcadvgjcdg bcadvgjcadvgjacsggvjcagjvasvgjcgjasjcvashjcvasycfstucvhjaxchkhasgfc
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}


export default function card(){
    return (
 
    <Grid 
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="center" >

        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
    </Grid>
 
    )
}
