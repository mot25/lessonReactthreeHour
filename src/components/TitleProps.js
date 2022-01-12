import React from "react";

function TitleProps(props) {
  function abc(e) {
    // console.dir(e);
    props.remove(props.number);
    console.log(props.number);
  }
  return (
    <div className="blockTitleProps">
      <h3>{props.number}</h3>
      <h1>{props.post.title}</h1>
      <p>{props.post.description}</p>
      <button data-d={props.number} onClick={abc}>delete</button>
    </div>
  );
}

export default TitleProps;
