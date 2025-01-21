import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
export default function Homepagedarkmode() {
  const [email, setEmail] = useState();
  const [toggle, setToggle] = useState();


  useEffect(() => {
    setEmail(Cookies.get("email"));
    setToggle(Cookies.get("mode"));
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: toggle === "dark" ? "black" : "white",
          color: toggle == "dark" ? "white" : "black",
          height: "300px"
        }}
      >
        <h1>hello {email}</h1>
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      {console.log("The email is ", email)}
      {console.log("The Theme is", toggle)}
    </>
  );
}
