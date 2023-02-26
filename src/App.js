import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import Login from './components/Login.js'
import Checkout from './components/Checkout.js'
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js'

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.OnAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    // return () => {
    //   unsubscribe();
    // }

  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
