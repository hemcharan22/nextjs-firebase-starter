import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { ContentPasteSearchOutlined } from '@mui/icons-material';




export default function Typedropdown() { 

  
  const [selectedOptions, setSelectedOptions] = useState(null);
 
  
  // console.log(selectedtypeisnotnull)
 
  if (selectedOptions != null){  
    let selectedtypeisnotnull="rf"
    selectedtypeisnotnull=selectedOptions
    console.log(selectedtypeisnotnull)
  }

  

 
 
  // console.log(selectedOptions)

  // const handleChange = (event, value) => setSelectedOptions(value);
                      
  
  return (
    <Autocomplete
    onChange={(event, value) => setSelectedOptions(value)}
    disablePortal
    id="combo-box-demo"
    options={city}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="select your type" />}
    />
    
  );
}


const city = [
  "coed","chennai","grils"
];