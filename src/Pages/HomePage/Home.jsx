import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import SearchResult from "../../Components/SearchResult";
import SearchSection from "../../Components/SearchSection";
import Search from "../../Components/Search";

const Home = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <h1>This is landing Home Page</h1>
      <NavLink to="/signin">
        <button>go to signin page</button>
      </NavLink>
      <NavLink to="/signup">
        <button>go to signup page</button>
      </NavLink>

      <div className="searchbar_center" style={{ marginTop: "4rem" }}>
        <div className="search-bar-container">
          <div className="searchbar">
            {/* <SearchBar setResults={setResults} /> */}
          </div>
          <SearchResult results={results} />

          <div className="div">
            <SearchSection/>
          </div>

          <div>
            <Search/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
