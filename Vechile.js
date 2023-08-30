import React from "react";
import Images from "./Images";
import { image } from "./Vechile_info";
import "./Vechile.css";
function Vechile() {
  return (
    <div style={{ backgroundColor: "#E5EBF8", width: "100vw" }}>
      <div>
        <h1 style={{ fontWeight: "500", marginLeft: "3%" }}>Vechile Images</h1>
      </div>
      <div className="card">
        <div style={{ display: "flex", width: "100vw" }}>
          {image.map((name) => (
            <Images
              imglink={name[0]}
              head={name[1]}
              para={name[2]}
              money={name[3]}
              city={name[4]}
              driver={name[5]}
              content={name[6]}
              content1={name[7]}
              money1={name[8]}
              fuel={name[9]}
              imglink1={name[10]}
              data={name[11]}
              imglink2={name[12]}
              data1={name[13]}
              imglink3={name[14]}
              data2={name[15]}
              butt={name[16]}
            ></Images>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vechile;
