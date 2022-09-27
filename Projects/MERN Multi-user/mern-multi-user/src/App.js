//React hooks allow class state to be available for functions


/*
useState - Returns state value and an update function
useEffect - Allows imperative calls to functions for state 
useLocation - Returns current browser location

useSelector - A hook to access redux state file
*/

import React, {useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link, useLocation } from "react-router-dom"


import logo from './logo.svg';

//Utilize bootstrap library for quick views
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';


//Importing components
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Profile from "./components/Profile"
import BoardUser from "./components/BoardUser"
import BoardAdmin from "./components/BoardAdmin"
import BoardModerator from "./components/BoardModerator"

//Actions
import { logout } from "./actions/auth"
import { clearMessage } from "./actions/messages"

//Utilized an arrow function 
const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false)
    const [showAdminBoard, setShowAdminBoard] = useState(false)

    const {user: currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    let location = useLocation()

    //Clears messages after changing location
    useEffect(() => {
      if(["/login", "/register"].includes(location.pathname)) {
        dispatch(clearMessage())
      }
    }, [dispatch, location])

    //Return memoized callback that only changes if inputs are changed
    const logOut = useCallback( () => {
      dispatch(logout())
    }, [dispatch])

    useEffect( () => {
      if(currentUser) {
        setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"))
        setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"))
      } else {
        setShowModeratorBoard(false)
        setShowAdminBoard(false)
      }
    }, [currentUser])

    return (


      //Navigation Bar dynamically changes depending on user
      <div>
        <nav className= "navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Be-Best-Banking
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
    
      <div className="App">
        <div className='container mt-3'>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/home" element={< Home />} />
            <Route path="/register" element={< Register />} />
            <Route path="/profile" element={< Profile />} />
            <Route path="/user" element={< BoardUser />} />
            <Route path="/mod" element={< BoardModerator />} />
            <Route path="/admin" element={< BoardAdmin />} />
          </Routes>
        </div>


     </div>

    </div>
  );
}

export default App;
