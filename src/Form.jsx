import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';



export default () => {
   

   function otpPage(e){
       e.preventDefault();
       let path = `./otpPage`;
       let history = useHistory();
       history.push(path);
   }
  const [value, setValue] = useState("");
  return (
    <div className="form">
      <div className="header">
        <h1>Your Phone Number</h1>
        <h2>please confirm your phone number</h2>
      </div>

      <div className="phonenumber">
        <input
          className="input"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="next">
        <button className="nextButton" onClick={otpPage}>NEXT</button>
      </div>
    </div>
  );
};
