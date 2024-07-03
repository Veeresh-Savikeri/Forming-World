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
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
          <div className="navProfile">.</div>
        </div>
      </div>
    </div>
  );
}
