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

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [schools, setSchools] = useState([]);
  const schoolsCollectionRef = collection(db, "schools");
  
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };


  //updating age of a user
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  //delete user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };


  useEffect(() => {
    const getSchools = async () => {
    //   const data = await getDocs(schoolsCollectionRef);
    //   setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    const q = query(collection(db, "schools"), where("city", "==", "hrg"));
    const data = await getDocs(q);
    setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
};

    getSchools();
  }, []);

  return (
    <Container className="App">
      <p>tddry</p>
   
    </Container>
  );
}

export default App;
