import React, { useState } from "react";
import Cookies from "js-cookie";

export default function About() {
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState("light");

  const handeltoggle = (e) => {
    setToggle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length > 5) {
      Cookies.set("mode", toggle, { expires: 7 });
      Cookies.set("email", email, { expires: 7 });
      alert(`Cookie created with name `);
    }
  };

  return (
    <>
      <div className="container mt-5 border">
        <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
          Login page
        </h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <label className="w-100">
            User Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control w-100"
            />
          </label>
          <br />
          <label className="mt-4 mb-4">
            Theme Preference:
            <select
              name="theme"
              className="form-select"
              onChange={handeltoggle}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <br />
          <button type="submit" className="btn btn-primary mt-3 w-100 mb-4">
            Login
          </button>
        </form>
      </div>
      <p>{toggle}</p>
    </>
  );
}
