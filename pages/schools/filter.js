import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { db } from "../api/config";

import Typedropdown from "../../components/dropdows/type";
import selectedOptions from "../../components/dropdows/type";
import Board from "../../components/dropdows/board";
import State from "../../components/dropdows/state"
import City from "../../components/dropdows/city";
import { Box } from "@mui/material";

function App  ()  {
 
  const[stateOne, setStateOne]= useState("null")    




  return (
    <Container className="App"  >
    <Box  sx={{ p: 2, border: '1px solid #8ab2eb' , display: 'inline-block' , borderRadius: '15px' }}>
      <h2>filters</h2>
      <p>Type</p>
      <Typedropdown />
      <p>Board</p>
      <Board/>
      <p>State</p>
      <State/>
      {/* <p>city</p>
      <City/> */}

     </Box>
  
        
    </Container>
  );
}

export default App;