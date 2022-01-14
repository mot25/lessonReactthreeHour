import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";

import Counter from "../components/Counter";
import TitleProps from "../components/TitleProps";
import Addpost from "../components/Addpost";
import SelectElem from "../components/SelectElem";
import Mymodule from "../UI/Mymodule";
import ButtonPage from "../components/ButtonPage";
const axios = require("axios");

function Posts() {
  const [Likes, setLikes] = useState(0);
  const [Value, setValue] = useState("text input");

  const increment = () => {
    setLikes(Likes + 1);
  };
  const decrement = () => {
    setLikes(Likes - 1);
  };
  const [Posts, setPosts] = useState([]);
  const [defaultPosts, setdefaultPosts] = useState([...Posts]);

  const [Select, setSelect] = useState([
    { value: "title", title: "title" },
    { value: "body", title: "body" },
  ]);
  function addPostProps(e) {
    setPosts([...Posts, e]);
  }
  function removePost(e) {
    setPosts(Posts.filter((post) => post.id !== e));
  }
  function SortSelect(sort) {
    // console.log("sort", sort.target.value);
    let collatore = new Intl.Collator("ru-RU");
    setPosts(
      [...Posts].sort((a, b) => {
        return collatore.compare(a[sort.target.value], b[sort.target.value]);
      })
    );
  }
  const [search, setsearch] = useState("");
  function Search(e) {
    e.preventDefault();
    // console.log(search);
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
  const [totalCount, settotalCount] = useState(0);
  const [limit, setlimit] = useState(7);
  const [selectPage, setselectPage] = useState(0);
  async function getchPost(limit, page) {
    let { data, headers } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    settotalCount(+headers["x-total-count"]);
    // console.log("res", data);
    setPosts(data);
  }
  const showPost = (e) => {
    // console.log(totalCount);
  };
  useEffect(() => {
    getchPost(limit, 1);
    showPost();
  }, []);
  const buttonPage = totalCount / limit;
  //   console.log("buttonPage", buttonPage);
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
        <input
          value={selectPage}
          onChange={(e) => {
            getchPost(limit, e.target.value);
            setselectPage(e.target.value);
          }}
          placeholder="Введите номер страницы"
          type="number"
          min="0"
          max={totalCount / limit}
        />
        <ButtonPage
          propsSetPage={setselectPage}
          propslimit={limit}
          page={getchPost}
          total={buttonPage}
        />
        {Posts.length > 0 ? (
          <TransitionGroup>
            {Posts.map((item, i) => {
              return (
                <CSSTransition key={item.id} timeout={500} classNames="post">
                  <TitleProps
                    itemId={item.id}
                    remove={removePost}
                    number={i + 1}
                    post={item}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        ) : (
          <h3>empty post</h3>
        )}
        <div style={{height: '20', backgroundColor: 'red', width: '100%'}}></div>
      </div>
    </div>
  );
}

export default Posts;
