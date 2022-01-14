import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const axios = require("axios");
function PostOne() {
  const [Post, setPost] = useState();
  const [Comments, setComments] = useState();
  if (Post === false) {
    console.log(false);
  }
  const params = useParams();
  const fetchOnePost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    await setPost(data);
  };
  const fetchCommeents = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    );
    await setComments(data);
  };

  useEffect(async () => {
    await fetchOnePost();
    await fetchCommeents();
  }, [params]);

  return (
    <div>
      {Post ? (
        <div>
          <h1>your open title = {Post.title}</h1>
          <h1>your open body = {Post.body}</h1>
          <h1>your open id = {Post.id}</h1>
          <h1>your open userId = {Post.userId}</h1>
        </div>
      ) : (
        "loading"
      )}
      <h1>--Comments--</h1>
      {Comments ? (
        Comments.map((item) => {
          return (
            <div key={item.id}>
              <div>------</div>
              <h3>{item.name}</h3>
              <h3>{item.email}</h3>
              <h3>{item.body}</h3>
              <div>------</div>
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default PostOne;
