import React from "react";
import "../css/Home.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navTop">
          <h1 className="navText">Froming-World</h1>
          <div className="navInput">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
          <div className="navProfile">.</div>
        </div>
        <div className="navBottom">
          <ul className="navList">
            <li className="navItem">Home</li>
            <li className="navItem">Preforing</li>
            <li className="navItem">Forming</li>
            <li className="navItem">Postforming</li>
            <li className="navItem">About</li>
            <li className="navItem">Help</li>
            <li className="navItem">Payments</li>
            <li className="navItem">News</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
