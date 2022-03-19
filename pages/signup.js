import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../pages/api/auth";
import { setErrorMessage } from "../pages/api/setErrorMessage";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { signInWithGoogle } from "../pages/api/config";
import { signInWithGithub } from "../pages/api/config";

const Login = () => {
  const router = useRouter();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event, email, password) => {
    event.preventDefault(); // prevents default behaviour of html form for more explainion visit https://stackoverflow.com/questions/62468443/firebase-auth-network-error-from-event-preventdefault-and-event-stoppropagatio#:~:text=preventDefault()%20you%20indicate%20that,to%20act%20on%20the%20event.

    auth
      .signUp(email, password)
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

  // const auth = getAuth();

  // if a user is logged in, redirect to a page of your liking
  if (auth.user) {
    router.push("/");
    return null;
  }

  // if there is no signed in user
  if (!auth.user) {
    return (
      <div style={{ width: "300px", margin: "auto" , marginTop : "100px" }}>
        <p>Signup</p>

        <Button
          type="submit"
          variant="outlined"
          onClick={signInWithGoogle}
          sx={{ marginBottom: "10px", width: "200px" }}
        >
          Sign-in with Google
        </Button>

        <Button
          type="submit"
          variant="outlined"
          onClick={signInWithGithub}
          sx={{ marginBottom: "10px", width: "200px" }}
        >
          Sign-in with Github
        </Button>
        {/* github not enabled enable it in the firebase console */}

        <form onSubmit={(event) => signUp(event, email, password)}>
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

          <br />
          <br />

          <Button type="submit" variant="contained">
            signup
          </Button>
        </form>

        <br />

        <a href="/"> <p>&larr; Go back</p> </a>
        {/* &larr is the html charector for left arrow https://www.w3schools.com/charsets/ref_utf_arrows.asp */}
      
      </div>
    );
  }
};

export default Login;

{
  /* github not enabled enable it in the firebase console */
}
