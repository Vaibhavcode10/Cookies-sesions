import React, { useState } from "react";
import Cookies from "js-cookie";
 

export default function Setcookies() {
  const [cookieName, setCookieName] = useState("");
  const [cookieValue, setCookieValue] = useState("");

  const handleCookie = (e) => {
    e.preventDefault();  
 
    Cookies.set(cookieName, cookieValue, { expires: 1 });
    alert(`Cookie created for ${cookieName}`);
  };

  return (
    <div className="container mt-5 border">
      <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
        Create Cookie
      </h1>
      <form className="form-group">
        <label className="w-100">
          Email:
          <input
            value={cookieName}
            onChange={(e) => setCookieName(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <br />
        <label className="w-100">
          Cookie Value:
          <input
            value={cookieValue}
            onChange={(e) => setCookieValue(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <br />
        <button
          onClick={handleCookie}
          className="btn btn-primary mt-3 w-100 mb-4"
        >
          Create Cookie
        </button>
      </form>
    </div>
  );
}
