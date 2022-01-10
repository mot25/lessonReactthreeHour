import React, { useState } from "react";

import "./App.css";

import Counter from "./components/Counter";
import TitleProps from "./components/TitleProps";
import MyButton from "./UI/MyButton";

function App() {
  const [Likes, setLikes] = useState(0);
  const [Value, setValue] = useState("text input");

  const increment = () => {
    console.log("increment");
    setLikes(Likes + 1);
  };
  const decrement = () => {
    console.log("decrement");
    setLikes(Likes - 1);
  };
  const [Posts, setPosts] = useState([
    { id: 1, title: "title", description: "description" },
    { id: 2, title: "title", description: "description" },
    { id: 3, title: "title", description: "description" },
    { id: 4, title: "title", description: "description" },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h2>{Likes}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className="container">
        <h2>{Value}</h2>
        <input
          type="text"
          onChange={(enent) => setValue(enent.target.value)}
          defaultValue={Value}
        />
      </div>
      <div className="container">
        <Counter propsCounret={Likes} />
      </div>
      <div className="container">
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <MyButton text={Value} />
        </form>
        {Posts.map((item) => {
          return <TitleProps key={item.id} post={item} />;
        })}
      </div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>
    </div>
  );
}

export default App;
