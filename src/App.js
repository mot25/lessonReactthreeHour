import React, { useMemo, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

import Counter from "./components/Counter";
import TitleProps from "./components/TitleProps";
import Addpost from "./components/Addpost";
import SelectElem from "./components/SelectElem";
import Mymodule from "./UI/Mymodule";

function App() {
  const [Likes, setLikes] = useState(0);
  const [Value, setValue] = useState("text input");

  const increment = () => {
    setLikes(Likes + 1);
  };
  const decrement = () => {
    setLikes(Likes - 1);
  };
  const [Posts, setPosts] = useState([
    { id: 1, title: "пп", description: "descri1ption" },
    { id: 2, title: "аа", description: "descr2iption" },
    { id: 3, title: "бб", description: "descr3iption" },
    { id: 4, title: "фф", description: "descript4ion" },
  ]);
  const [defaultPosts, setdefaultPosts] = useState([...Posts]);

  const [Select, setSelect] = useState([
    { value: "title", title: "title" },
    { value: "description", title: "description" },
  ]);
  function addPostProps(e) {
    setPosts([...Posts, e]);
  }
  function removePost(e) {
    console.log("e", e);
    setPosts(Posts.filter((post) => post.id !== e));
  }
  function SortSelect(sort) {
    console.log("sort", sort);
    let collatore = new Intl.Collator("ru-RU");
    setPosts(
      [...Posts].sort((a, b) => {
        return collatore.compare(a.title, b.title);
      })
    );
  }
  const [search, setsearch] = useState("");
  function Search(e) {
    e.preventDefault();
    console.log(search);
    if (!search) {
      return setPosts(defaultPosts);
    }
    setPosts([...Posts].filter((item) => item.title == search));
  }
  const [visability, setvisability] = useState(false);
  if (visability) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const visModule = () => {
    setvisability(!visability);
  };
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
        <button onClick={visModule}>popup addPost</button>
        <Mymodule vis={visability} setVis={setvisability}>
          <Addpost value={Value} propsFunction={addPostProps} />
        </Mymodule>
        <div>
          <form onSubmit={Search} value={search}>
            <input
              placeholder="search"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              type="text"
            />
            <button>search</button>
          </form>
          <SelectElem
            propsSortSelect={SortSelect}
            propsSort={"bsbdfvsfv"}
            Select={Select}
          />
        </div>
        <TransitionGroup>
          {Posts.map((item, i) => {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="post">
                <TitleProps remove={removePost} number={i + 1} post={item} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
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
