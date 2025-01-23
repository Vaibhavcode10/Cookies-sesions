import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import Contact from './Contact';
import Help from './Help';
import Navbar from './Navbar';

const App = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <div>
        {isLoggedIn ? (
           <>
           <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
           <Routes>
             <Route path="/home" element={<Home />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/help" element={<Help />}/>
           </Routes>
         </>
          
        ) : (
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
 
  );
};

export default App;
