import React, { useState } from "react";
import Cookies from "js-cookie";
 
import Setcookies from "./Setcookies";

export default function LoginPage() {
  const [cookieName, setCookieName] = useState("");
  const [cookieValue, setCookieValue] = useState("");
  const [cookievalue2,setcookievalue2]=useState('');
  const handleCookie = (e) => {
    e.preventDefault();  
  
    Cookies.set(cookieName, cookieValue, { expires: 7 });
    alert(`Cookie created for ${cookieName}`);
    setCookieName('');
    setCookieValue('');
    setcookievalue2('');
  };

  return (
    <div className="container mt-5 border">
      <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
      Login page
      </h1>
      <form className="form-group">
        <label className="w-100">
         User Name:
          <input
            value={cookieName}
            onChange={(e) => setCookieName(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <br />
        <label className="w-100 mt-2">
        Email
          <input
            value={cookieValue}
            onChange={(e) => setCookieValue(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <label className="w-100 mt-2">
          password
          <input
            value={cookievalue2}
            onChange={(e) => setcookievalue2(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <br />
        <button
          onClick={handleCookie}
          className="btn btn-primary mt-3 w-100 mb-4"
        >
        Login
        </button>
      </form>
    </div>
  );
}
