import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "./img.jpg";
import Cookies from "js-cookie";
const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setemail] = useState("");
  const [theme, settheme] = useState("Light");
  const [password, setpassword] = useState("");
  const [temp, settemp] = useState(true);
  const settingcookieval = () => {
    if (email) {
      Cookies.set("Email", email, { expires: 7 });
      Cookies.set("Mode", theme, { expires: 7 });
      alert("Login data saved");
    } else {
      alert("login data not saved");
    }
  };
  const changingtheme = () => {
    settemp(!temp);
    console.log("value is", temp);
    {
      temp ? settheme("Dark") : settheme("Light");
    }
  };
  return (
    <>
      <div
        className="row vh-100"
        style={{
          backgroundColor: theme == "Dark" ? "black" : "white",
          color: theme == "Dark" ? "white" : "black"
        }}
      >
        <div className="col-md-6 d-none d-md-block">
          <img
            src={img}
            className="w-100"
            style={{
              borderTopRightRadius: "25px",
              height: "100%",
              objectFit: "cover"
            }}
            alt="Login Visual"
          />
        </div>
        <div className="col-md-6 position-relative">
          <div
            className="container h-100 d-flex flex-column  "
            style={{ marginTop: "180px" }}
          >
            
{/* Toggle button */}
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
                value={"dark"}
                onClick={() => changingtheme()}
              />
              <label
                class="form-check-label"
                for="flexSwitchCheckDefault"
                value={"Light"}
              >
                 {theme} theme
              </label>
            </div>

            {/* form  */}

            <form className="form-group">
              <h1 className="display-4 text-center">Login</h1>
              <label className="w-100">
                Email 
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </label>
              <br />
              <label className="w-100">
                Password
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </label>
              <Link to="/home" onClick={() => setIsLoggedIn(true)}>
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={settingcookieval}
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
