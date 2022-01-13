import React from "react";
import MyButton from "../UI/MyButton";

function Addpost(props) {
  const formAdd = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: e.target[0].value,
      body: e.target[1].value,
    };
    props.propsFunction(newPost);
    e.target[0].value = ''
    e.target[1].value = ''
  };

  return (
    <form onSubmit={formAdd}>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="body" />
      <MyButton text={props.value}>{props.value}</MyButton>
    </form>
  );
}

export default Addpost;
