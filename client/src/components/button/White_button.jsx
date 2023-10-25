import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="white button" onClick={props.next}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
