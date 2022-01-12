import React from "react";


function SelectElem(props) {
  return (
    <div>
      <select onChange={props.propsSortSelect}>
        <option disabled>sort</option>
    
        {props.Select.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectElem;
