import React, {useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link, useLocation } from "react-router-dom"


import logo from './logo.svg';
import './App.css';

//Utilize bootstrap library for quick views
import "bootstrap/dist/css/bootstrap.min.css"

//Importing components
import Login from "./components/Login"

//Utilized an arrow function 
const App = () => {
    return (
    <div className="App">


      <div className='container mt-3'>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn and become an amazing software engineer
        </a>
      </header>
    </div>
  );
}

export default App;
