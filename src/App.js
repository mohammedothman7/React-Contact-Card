import React from "react";
import Contact from "./contact-card/contact";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Contact
        name="Mohammed"
        mobile="7185555555"
        work="8005555555"
        email="mohammed@example.com"
      ></Contact>
    </>
  );
}

export default App;
