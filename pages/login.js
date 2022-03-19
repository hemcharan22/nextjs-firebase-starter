import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../pages/api/auth";
import { setErrorMessage } from "../pages/api/setErrorMessage";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { signInWithGoogle } from "../pages/api/config";
import { signInWithGithub } from "../pages/api/config";
// import { signIn } from "../pages/api/config";

const Login = () => {
  const router = useRouter(); //using router from react
  const auth = useAuth(); //using auth function from firebase

  const [email, setEmail] = useState(""); //decalaring email
  const [password, setPassword] = useState(""); //declaring password

  const signIn = (event, email, password) => {
    event.preventDefault();

    auth
      .signIn(email, password)
      .then(() => {
        // do something after signing in. For example, router.push("/");
        router.push("/");
      })
      .catch((error) => {
        let { title, description } = setErrorMessage(error);
        // do something with error title and description here
        alert(title + ": " + description);
      });
  };

  // loading state
  if (auth.loading) {
    return <p>Loading...</p>;
  }

  // if a user is logged in, redirect to a page of your liking
  if (auth.user) {
    router.push("/");
    return null;
  }

  // if there is no signed in user
  if (!auth.user) {
    return (
      <div style={{width: "300px" , margin: "auto" , marginTop : "100px"}}>
        <p>Login</p>

        <Button type="submit" variant="outlined" onClick={signInWithGoogle} sx={{marginBottom:"10px" , width: "200px" }}>       
          Sign-in with Google
        </Button>
        
        <Button type="submit" variant="outlined" onClick={signInWithGithub} sx={{marginBottom:"10px" , width: "200px" }}>          
          Sign-in with Github
        </Button>
        {/* github not enabled enable it in the firebase console */}

        <form onSubmit={(event) => signIn(event, email, password)}>
          <label>
            <p>Email Address</p>
          </label>
          <TextField
            sx={{ width: 200 }}
            fullWidth
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <br />

          <label>
            <p>password</p>
          </label>
          <TextField
            sx={{ width: 200 }}
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <br/>
          <br/>

          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>

        <br />

       
        <a href="/">
           <p>&larr; Go back</p>
        </a>
        
      </div>
    );
  }
};

export default Login;
