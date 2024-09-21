// src/App.js
import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import MyCalendar from "./Calender";
import { Container } from "@mui/material";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Container>
      <GoogleAuth setUser={setUser} />
      {user && <MyCalendar user={user} />}
    </Container>
  );
};

export default App;
