import React, { useState } from 'react'
import { Link, Route,Routes } from 'react-router'
import DarkModecontact from './DarkModecontact';
import About from './About'
import Homepagedarkmode from './Homepagedarkmode'
import DarkmodeHelp from './DarkmodeHelp'
export default function Dashboard() {
  const [Cookiname,setCookieName]=useState('');
  const [CookieValue,SetCookiesvalue]=useState('');
  const [Theme,setTheme]=useState(true);
  return (
   <>
       <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-light ms-2" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-light">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Homepage" className="nav-link text-light">
               Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactpage" className="nav-link text-light">
              contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Help" className="nav-link text-light">
                 Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
   <Routes>
    
    <Route path='/' element={<About />}/>
    <Route path='/Homepage' element={<Homepagedarkmode />}/>
    <Route path='/contactpage' element={<DarkModecontact />}/>
    <Route path='/Help' element={<DarkmodeHelp />}/>
   </Routes>
      </>
  )
}
