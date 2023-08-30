import React from "react";

function Cards(props) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "3%", display: "flex" }}>
        <img src={props.imglink}></img>
        <div>
          <p style={{ margin: "1%" }}>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
