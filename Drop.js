import React from "react";
import Cards from "./Cards";
function Drop(props) {
  const ele = [
    [
      "https://www.redbus.in/bus-hire/images/ic-1.svg",
      "Click on HIRE A VEHICLE and give your trip details",
    ],
    [
      "https://www.redbus.in/bus-hire/images/ic-2.svg",
      "We work with best operators to get the best prices",
    ],
    [
      "https://www.redbus.in/bus-hire/images/ic-3.svg",
      "Select the vehicle of your choice and go on your trip.",
    ],
  ];
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "2%",
        paddingBottom: "2%",
        backgroundColor: "#F8F4F4",
        fontWeight: "500",
        color: "#9B9D9B",
      }}
    >
      {ele.map((item) => (
        <Cards imglink={item[0]} content={item[1]}></Cards>
      ))}
    </div>
  );
}

export default Drop;
