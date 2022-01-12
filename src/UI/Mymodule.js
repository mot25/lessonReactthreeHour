import React from "react";
import classes from "./Mymodule.module.css";

const Mymodule = ({ children, vis, setVis }, props) => {
  const rootClass = [classes.Mymodule];
  if (vis) {
    rootClass.push(classes.active);
  }
  const closeMod = () => {
    console.log("bdbs");
    setVis(!vis);
  };
  const closeModClick = (e) => {
    console.dir(e.target.dataset.del);
    if (e.target.dataset.del === "oberkta") {
      setVis(!vis);
    }
  };
  return (
    <div
      data-del="oberkta"
      onClick={closeModClick}
      className={rootClass.join(" ")}
    >
      <div className={classes.module}>
        <div className="cloceX" onClick={closeMod}>
          Х
        </div>
        {children}
      </div>
    </div>
  );
};

export default Mymodule;
