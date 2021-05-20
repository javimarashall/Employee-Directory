import React from "react";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;