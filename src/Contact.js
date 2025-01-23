import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const Contact = () => {
  const [email, setemail] = useState("");
  const [theme, settheme] = useState("");
  useEffect(() => {
    const email1 = Cookies.get("Email");
    console.log("vaue is ", email1);
    setemail(email1);

    const themeval = Cookies.get("Mode");
    console.log("theme is ", themeval);
    settheme(themeval);
  }, []);
  return (
    <>
      <div
        style={{
          height: "60rem",
          backgroundColor: theme === "Dark" ? "black" : "white",
          color: theme == "Dark" ? "white" : "black"
        }}
      >
        <h3> hello {email}</h3>
        <p>
          Now is the winter of our discontent Made glorious summer by this sun
          of York; And all the clouds that lour'd upon our house In the deep
          bosom of the ocean buried. Now are our brows bound with victorious
          wreaths; Our bruised arms hung up for monuments; Our stern alarums
          changed to merry meetings, Our dreadful marches to delightful
          measures. Grim-visaged war hath smooth'd his wrinkled front; And now,
          instead of mounting barded steeds To fright the souls of fearful
          adversaries, He capers nimbly in a lady's chamber To the lascivious
          pleasing of a lute. But I, that am not shaped for sportive tricks, Nor
          made to court an amorous looking-glass; I, that am rudely stamp'd, and
          want love's majesty To strut before a wanton ambling nymph; I, that am
          curtail'd of this fair proportion,
        </p>
      </div>
    </>
  );
};

export default Contact;
