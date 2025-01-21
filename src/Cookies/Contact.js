import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
export default function Contact() {
  const [cookieValue,setcookieValue]=useState("");
 const handelclick=(e)=>
 {
  const value=Cookies.get("vaibhav hoke")
  setcookieValue(value);
 if(value)
 {
  console.log("the  value is",value)
 }
 else
 {
  console.log("The vvalue ddoes not found ")
 }
 }
  return (
  <>
 <big>  <p style={{fontFamily:'monospace'}} className='mtt-2'>{cookieValue?<p>Your emai id is {cookieValue}</p>:<p></p>}</p></big>
   <button onClick={handelclick} className='btn  border m-3'>
    retruve data
   </button>
  </>
  )
}
