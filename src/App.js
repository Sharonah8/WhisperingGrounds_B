
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from './Components/LogIn';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LogIn from './Components/LogIn';
// import SignUp from './Components/SignUp'

function App() {
  return (
    <div className="App">
      <h1>Sanaa</h1>
      <LogIn />
      {/* <LogIn /> */}
      {/* <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route path="/Login" element={<SignUp />} />
      </Routes> */}
    </div>
  );
}

export default App;
