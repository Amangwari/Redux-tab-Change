import React from "react";

const Searchresultlist = ({ result }) => {
  return (
    <div
      className="search-result-list"
      onClick={(e) => alert(`You clicked on  ${result.name}`)}
    >
      {result.name}
    </div>
  );
};

export default Searchresultlist;
