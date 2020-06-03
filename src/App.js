import React, { Component } from "react";
import Contact from "./contact-card/contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>Contact Card</h1>
        <Contact
          name="Mohammed"
          mobile="718-555-5555"
          work="800-555-5555"
          email="mohammed@example.com"
        ></Contact>

        <Contact
          name="Joe"
          mobile="917-555-5555"
          work="800-123-4567"
          email="joe@example.com"
        ></Contact>

        <Contact
          name="Ally"
          mobile="347-492-00000"
          work="718-800-9876"
          email="ally@example.com"
        ></Contact>
      </>
    );
  }
}

export default App;
