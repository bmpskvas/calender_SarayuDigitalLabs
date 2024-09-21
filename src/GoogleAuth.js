// src/GoogleAuth.js
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { signInWithGoogle, signOutUser } from "./firebase";

const GoogleAuth = ({ setUser }) => {
  const [user, setUserState] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      setUserState(result.user);
      setUser(result.user); // Pass user data to parent component
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUserState(null);
      setUser(null); // Clear user data in parent component
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: user ? "flex-start" : "center", // Center before login
        alignItems: user ? "flex-start" : "center", // Top-left after login
        height: user ? "auto" : "100vh", // Full height before login
        padding: "10px",
      }}
    >
      {user ? (
        <div>
          <Typography variant="h6">Welcome, {user.displayName}!</Typography>
          <Button variant="contained" color="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      ) : (
        <Button
          variant="contained"
          onClick={handleGoogleSignIn}
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ddd",
            padding: "5px 15px",
          }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          Sign in with Google
        </Button>
      )}
    </Box>
  );
};

export default GoogleAuth;
