import React from "react";
import classes from "./MyButton.module.css";

const MyButton = (props) => {
    return(
        <button className={classes.button}>
            {props.text}
        </button>
    )
}

export default MyButton