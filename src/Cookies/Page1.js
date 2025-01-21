import React, { useState } from "react";
import Cookies from "js-cookie";
 

export default function Getcookievalue() {
  const [cookieValue, setCookieValue] = useState("");
 
const [Emailid,setEmailid]=useState('');
  const handleGetCookie = () => {
    const value = Cookies.get("vaibhav hoke");
    if (value) {
      setEmailid(value);
      console.log("Cookie value retrieved:", value);
    } else {
      console.log("No cookie found for email:");
    }
  };

  return (
    <div className="container mt-5 border">
      <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
        Retrieve Emails
      </h1>
     
    
    <big>
    <p  style={{fontFamily:'monospace'}}>your email id is: {Emailid || "Not Found"}</p>
    </big>
      <button
        onClick={handleGetCookie}
        className="btn btn-primary mt-3 w-100 mb-4"
      >
      Show email id
      </button>
    </div>
  );
}
