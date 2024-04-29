import React, { useState } from "react";
import "../css/Navbar.css"; // You can create this CSS file to define styles

import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    navigate(`/results?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="website-name">MovieDB</span>
      </div>
      <div className="navbar-right">
        <ul className="pages-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/toprated">TopRated</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming">Upcoming</NavLink>
          </li>
        </ul>
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
