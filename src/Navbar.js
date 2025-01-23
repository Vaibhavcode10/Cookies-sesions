import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const Navbar = ({ setIsLoggedIn,isLoggedIn }) => {
  const [temprorytheme, settemprorytheme] = useState(false);
  const [theme, settheme] = useState("");
  const changingtheme = (e) => {
    const settingtemp = Cookies.get("Mode");
    settheme(settingtemp);
    temprorytheme ? settheme("Dark") : settheme("Light");
    settemprorytheme(!temprorytheme);
    console.log(theme);
    Cookies.set("Mode", theme, { expires: 7 });
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link  " to={"/Home"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link  " to={"/Contact"}>
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link  " to={"/Help"}>
                Help
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link  " to={"/Home"}>
                Page3
              </Link>
            </li>

            <div
              class="form-check form-switch"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 1000
              }}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  changingtheme()
               
                }}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                change theme
              </label>
          
            </div>
            <button onClick={setIsLoggedIn(true)} className="btn" style={{float:'right'}}>Log Out</button>
          </ul>
        </div>
      </nav>
    
    </>
  );
};

export default Navbar;
