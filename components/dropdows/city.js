import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { ContentPasteSearchOutlined } from '@mui/icons-material';


const Cy = (props) =>{
  
  // console.log(props.name)
  // const [state, setState] = useState(props.name)
  let  state = props.name
  
  let cities =["gcfc","gjrycgh"]
  if (state == "Tamil Nadu")
  { cities = ["h bad", "bhabh"]}
  else {  cities = ["hba","kub"]}
  
  console.log(state)
  return <>
  <City cites={cities}/>
  </>
}




const City = (props) => { 
  
  const [city, setcity] = useState("");
  
//   if (selectedOptions != null){
//     console.log(selectedOptions)
//   }
   console.log(props.cites)
   
  
  return (
    <>
    <Autocomplete
    onChange={(event, value) => setcity(value)}
    disablePortal
    id="combo-box-demo"
    options={props.cites}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="select city type" placeholder="search your city" />}
    />
    
  </>
    
  );
  }
  
// export default City

export default City
export {
  Cy
}





console.log(Cy.state)



