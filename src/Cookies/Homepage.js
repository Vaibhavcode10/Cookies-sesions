import React, { useState } from "react";
import Cookies from "js-cookie";
 

export default function Homepage() {
  const [cookieValue, setCookieValue] = useState("");
 
  const handleGetCookie = () => {
    const value = Cookies.get("vaibhav hoke");
    if (value) {
      setCookieValue(value);
      console.log("Cookie value retrieved:", value);
    } else {
      console.log("No cookie found for email: vaibhavhoke");
    }
  };
  return (
    <div className="container mt-5 border">
      <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
        Retrieve Email
      </h1>
     
    <big>
    <p style={{fontFamily:'monospace'}}>Your Email is :{cookieValue || "Not Found"}</p>
    </big>
      <button
        onClick={handleGetCookie}
        className="btn btn-primary mt-3 w-100 mb-4"
      >
        Retrieve Deatails
      </button>
    </div>
  );
}
