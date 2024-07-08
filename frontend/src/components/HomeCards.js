import React from "react";
import "../css/HomeCard.css";
export default function HomeCards() {
  const pho = [1,2,3,4,4,4,4,4,4,];
  return (
    <>
      <div className="homeCard">
        {pho.map((item, idx) => {
          return (
            <>
            <div className="hcard">
              <div className="cardImg">.</div>
              <div className="cardText">Forming world</div>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}
