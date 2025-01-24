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
      {/* <div>
        {!isLoggedIn ? (
           <>
           <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
           <Routes>
             <Route path="/home" element={<Home />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/help" element={<Help />}/>
           </Routes>
         </>
          
        ) : (
          <AutoLoginpage setIsLoggedIn={setIsLoggedIn} />
        )}
      </div> */}
      {user ? (
        <div>
          <h2>Welcome,{user}</h2>
          <button onClick={() => handelogout()}>Logout</button>
          
        </div>
      ) : (
        <Sessionex setuser={setuser} />
      )}
    </>
  );
};

export default App;
