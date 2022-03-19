import Link from "next/link";
import { useState } from "react";
import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [email, setEmail] = useState(""); //decalaring email
  const [password, setPassword] = useState(""); //declaring password

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <p>Login</p>

      <Button type="submit" variant="outlined" sx={{marginBottom:"10px" , width: "200px" }}>
        Sign-in with Google
      </Button>

      <Button type="submit" variant="outlined" sx={{marginBottom:"10px" , width: "200px" }} >
        Sign-in with Github
      </Button>

      <form onSubmit={(event) => signIn(event, email, password)}>
        <label>
          <p>Email Address</p>
        </label>
        <TextField
          sx={{ width: 200}}
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
          <p>Password</p>
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
          Login
        </Button>
      </form>

      

      <Link href="/"><p>&larr; Go back</p></Link>
    </div>
  );
};

export default Login;
