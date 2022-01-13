import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const axios = require("axios");
function PostOne() {
  const [Post, setPost] = useState();
  if (Post === false) {
    console.log(false);
  }
  const params = useParams();
  console.log("params", params);
  const fetchOnePost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    await setPost(data);
  };

  useEffect(async () => {
    await fetchOnePost();
    console.log(Post);
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
    </div>
  );
}

export default PostOne;
