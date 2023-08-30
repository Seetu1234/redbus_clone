import React from "react";
import "./image.css";
function Images(props) {
  return (
    <div
      style={{
        width: "25vw",
        height: "90vh",
        backgroundColor: "white",
        borderRadius: "1%",
        margin: "2%",
      }}
    >
      <img src={props.imglink} width="100%"></img>
      <h2
        style={{
          width: "100%",
          fontWeight: "600",
          fontSize: "120%",
          whiteSpace: "nowrap",
          marginTop: "5%",
          marginLeft: "3%",
        }}
      >
        {props.head}
      </h2>
      <div
        style={{
          display: "flex",
          marginLeft: "3%",
        }}
      >
        <p>{props.para}</p>
        <h5>{props.money}</h5>
      </div>
      <div style={{ backgroundColor: "#FFF5E5", height: "10%" }}>
        <h6>
          <span>city</span>
          {props.city}
        </h6>
        <p style={{ marginLeft: "3%" }}>{props.driver}</p>
      </div>
      <div style={{ backgroundColor: "#F8F4F4", height: "10%" }}>
        <p style={{ marginLeft: "3%", height: "20%" }}>{props.content}</p>
        <div style={{ display: "flex" }}>
          <p style={{ marginLeft: "3%" }}>{props.content1}</p>
          <h4>{props.money1}</h4>
        </div>
      </div>
      <div style={{ margin: "3%" }}>
        <h3>{props.fuel}</h3>
        <div style={{ display: "flex", whiteSpace: "nowrap" }}>
          <img src={props.imglink1}></img>
          <p style={{ margin: "1%" }}>{props.data}</p>
        </div>
        <div style={{ display: "flex", whiteSpace: "nowrap" }}>
          <img src={props.imglink2}></img>
          <p style={{ margin: "1%" }}>{props.data1}</p>
        </div>
        <div style={{ display: "flex", whiteSpace: "nowrap" }}>
          <img src={props.imglink3}></img>
          <p style={{ margin: "1%" }}>{props.data2}</p>
        </div>
      </div>
      <button>{props.butt}</button>
    </div>
  );
}

export default Images;
