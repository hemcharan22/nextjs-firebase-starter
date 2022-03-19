import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Cy }from './city'


export default function State() { 

  const [Stete, setstete] = useState("get");
  
  
  return (
    <>
    <Autocomplete
    onChange={(event, value) => setstete(value)}
    disablePortal
    id="combo-box-demo"
    options={states}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="select state type" placeholder="search your state" />}    
    />
    <p>city</p>
    <Cy name={Stete}/>
     
    </>
  );
}



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];