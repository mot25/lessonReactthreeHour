import React from "react";

function ButtonPage({ total, propsSetPage, propslimit, page }) {
  let arr = [];
  for (let i = 0; i < total; i++) {
    arr.push(i + 1);
  }
  // console.log("arr", arr);
  return (
    <div>
      {arr.map((item) => {
        return (
          <button
            data-val={item}
            key={item}
            onClick={(e) => {
              page(propslimit, e.target.dataset.val);
              propsSetPage(e.target.dataset.val);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonPage;
{
  /* <input
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
/> */
}
