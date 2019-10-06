import React, { Component } from "react";
import "./App.css";
import Books from "./pages/Search"
import Nav from "./components/Nav"
class App extends Component {
  render() {
    return (
        <div>
          <Nav/>
          <Books/>
        </div>
    );
  }
}

export default App;
