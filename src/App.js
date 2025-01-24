import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import Contact from "./Contact";
import Help from "./Help";
import Navbar from "./Navbar";
import AutoLoginpage from "./reloadingLoginpage/AutoLoginpage";
import Sessionex from "./Sessions/Sessionex";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState(null);
  useEffect(() => {
    const storeduser = sessionStorage.getItem("user");
    if (storeduser) {
      setuser(storeduser);
    }
  }, []);
  const handelogout = () => {
    sessionStorage.removeItem("user");
    setuser(null);
  };
  return (
    <>
   
      
     {user ? (
        <div>
          <h2>Welcome,{user}</h2>
          <button onClick={() => handelogout()}>Logout</button>
        </div>
      ) : (
       <div className="row "  style={{height:'900px'}}>
        <div className="col-md-5 bg-dark"  style={{borderRadius:'20px'}} >
        
        </div>
        <div className="col-md-7 ">
       <div className="container">
       <Sessionex setuser={setuser} />
       </div>
        </div>
       </div>
      )}
     
    </>
  );
};

export default App;
