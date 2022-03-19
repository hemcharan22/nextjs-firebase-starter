import React from "react";
import Link from "next/link";
import { useAuth } from "../api/auth";

import Button from "@mui/material/Button";

function profile() {
  const { user, loading, signOut } = useAuth();
  return (
    <>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
          <Button variant="contained" onClick={signOut}>
            Log Out
          </Button>
        </>
      ) : (
        <>
          <h2>Log in or Sign up to see data</h2>

          <Link href="/login">
            <div>
              <Button variant="contained">login</Button>
            </div>
          </Link>

          <br />

          <Link href="/signup">
            <div>
              <Button variant="contained">signup</Button>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default profile;
