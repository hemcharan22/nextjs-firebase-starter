import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function Board() { 

  const [Board, setBoard] = useState([]);
  
//   if (selectedOptions != null){
//     console.log(selectedOptions)
//   }


  
  return (
    <Autocomplete
    onChange={(event, value) => setBoard(value)}
    disablePortal
    id="combo-box-demo"
    options={city}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="select board type" placeholder="search your board" />}
      
    />
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const city = [
  { label: 'state'},
  { label: 'cbse'},
  { label: 'icse'},
];