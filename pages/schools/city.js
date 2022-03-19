import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { db } from "../api/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, onSnapshot, query, where
} from "firebase/firestore";
import Typedropdown from "../../components/dropdows/type";
import selectedOptions from "../../components/dropdows/type";
import Board from "../../components/dropdows/board";
import State from "../../components/dropdows/state"

function App  ()  {
 
  // console.log(selectedOptions)
  const [schools, setSchools] = useState([]);
  const schoolsCollectionRef = collection(db, "schools");


  const[stateOne, setStateOne]= useState("null")
    
  useEffect(() => {
    const getSchools = async () => {
    //   const data = await getDocs(schoolsCollectionRef);
    //   setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    let a = "chennai"
    
    console.log(stateOne) 
    const q = query(collection(db, "schools"), where("board", "==", "state"));
    const data = await getDocs(q);
    setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

};


    getSchools();
  }, []);

  return (
    <Container className="App">
      <Typedropdown />
      <Board/>
      <State/>
     
      {
        schools.map((schools) => {
          return(
            <>
              
              
              <h1>Name: {schools.name}</h1>
              <p> About: {schools.about}</p>
              <a>city: {schools.city}</a>

            </>
        )
      })}
        
    </Container>
  );
}

export default App;



