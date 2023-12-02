import React, { useState } from "react";
import { Button } from "@mui/material";
import { json } from "react-router-dom";
import axios from "axios"

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");
  console.log(input);


//   const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://airports15.p.rapidapi.com/airports',
//   params: {name: 'dubai'},
//   headers: {
//     'X-RapidAPI-Key': '87a9546f67msheee41487af53249p179193jsn4f63517de333',
//     'X-RapidAPI-Host': 'airports15.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


const fetchData = async (value) => {
    try {
      const response = await axios.get('https://airports15.p.rapidapi.com/airports', {
        params: { name: value },
        headers: {
          'X-RapidAPI-Key': '87a9546f67msheee41487af53249p179193jsn4f63517de333',
          'X-RapidAPI-Host': 'airports15.p.rapidapi.com'
        }
      });

      setResults(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };


//   const fetchData = (value) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.name &&
//             user.name.toLowerCase().includes(value.toLowerCase())
//           );
//         });
//         console.log(results)
//         setResults(results);
//       });
//   };


  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <div className="input-wrapper">
        <input
          placeholder="Type to Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button variant="contained" className="search_icon">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
