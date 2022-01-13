import React from "react";
import { useNavigate } from "react-router";
function TitleProps(props) {
  function abc(e) {
    props.remove(props.itemId);
  }
  const navigate = useNavigate()
    return (
    <div className="blockTitleProps">
      <h3>{props.itemId}</h3>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <button data-d={props.number} onClick={abc}>
        delete
      </button>
      <button onClick={() => navigate(`/post/${props.itemId}`)}>open</button>
    </div>
  );
}

export default TitleProps;
