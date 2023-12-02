import React from "react";
import Searchresultlist from "./Searchresultlist";

const SearchResult = ({ results }) => {
  console.log(results);
  return (
    <div className="result-list">
      {results.map((result, id) => {
        return (
          <Searchresultlist
            result={result}
            key={id}
            
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
