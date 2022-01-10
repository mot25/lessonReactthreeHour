import React from "react";

function TitleProps(props) {
  return (
    <div className="blockTitleProps">
      <h3>{props.post.id}</h3>
      <h1>{props.post.title}</h1>
      <p>{props.post.description}</p>
    </div>
  );
}

export default TitleProps;
