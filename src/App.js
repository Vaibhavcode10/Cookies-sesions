import react,{useState} from "react";
import "./App.css";
 
import { Link, Route,Routes } from "react-router";
 
function App() {
  return (
    <>
    {/* Main */}
   <div>
       {/* <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light">
                contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" className="nav-link text-light">
                 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Page1" className="nav-link text-light">
               Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    
        <Routes>
          <Route path="/" element={<LoginPage />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/Page1" element={<Page1 />}/>
          <Route path="Home" element={<Homepage />} />
        </Routes> */}
     
   </div>
   <div>
     
   </div>
    </>
  );
}

export default App;
