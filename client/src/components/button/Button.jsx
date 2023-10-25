import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="green button" onClick={props.next}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
