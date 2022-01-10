import React from "react";
import classes from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button {...props} data-i={props.text} className={classes.button}>
      {props.children}
    </button>
  );
};

export default MyButton;
