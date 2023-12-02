import React, { useState, useEffect } from "react";
import "./SearchSection.css"; // Import your CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestions } from "../store/SearchSlice";

const SearchSection = () => {
    const dispatch = useDispatch();
    const suggestions = useSelector((state) => state.api);
    const [query, setQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDropdown, setShowDropdown] = useState(true);
  
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setQuery(inputValue);
      setShowDropdown(true);
  
      if (inputValue.length >= 3) {
        dispatch(fetchSuggestions(inputValue));
      } else {
        dispatch(fetchSuggestions(""));
      }
      console.log(inputValue)
    };

    
  useEffect(() => {
    if (suggestions.length > 0) {
      setSelectedItem(suggestions[0]); // Set the first suggestion as default selected item
    } else {
      setSelectedItem(null);
    }
  }, [suggestions]);


  console.log(suggestions);

  const handleItemClick = (result) => {
    setSelectedItem(result);
    setQuery(result.name);
    setShowDropdown(false);
  };


  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" && showDropdown) {
      event.preventDefault();
      // Handle arrow down key press for navigating through suggestions
      // Calculate the index of the next item to select
      const currentIndex = filteredSuggestions.indexOf(selectedItem);
      const nextIndex = currentIndex < filteredSuggestions.length - 1 ? currentIndex + 1 : 0;
      setSelectedItem(filteredSuggestions[nextIndex]);
    } else if (event.key === "ArrowUp" && showDropdown) {
      event.preventDefault();
      // Handle arrow up key press for navigating through suggestions
      const currentIndex = filteredSuggestions.indexOf(selectedItem);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredSuggestions.length - 1;
      setSelectedItem(filteredSuggestions[prevIndex]);
    } else if (event.key === "Enter" && selectedItem) {
      event.preventDefault();
      // Handle Enter key press to select the current item
      handleItemClick(selectedItem);
    }
  };


  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(query.toLowerCase())
  );



  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (selectedItem) {
        setQuery(selectedItem.name);
      }
    }
  };

  return (
    <div className="search-bar">
    <input
      type="text"
      placeholder="Type at least 3 characters..."
      value={query}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
    {showDropdown && query.length >= 3 && (
        <div className="dropdown">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((result) => (
              <div
                key={result.id}
                className={`dropdown-item ${result === selectedItem ? "selected" : ""}`}
                onClick={() => handleItemClick(result)}
              >
                {result.name}
              </div>
            ))
          ) : (
            <div className="no-results">No results match</div>
          )}
        </div>
      )}
  </div>
  );
};

export default SearchSection;




// code without redux

  //   const handleInputChange = async (event) => {
  //     const inputValue = event.target.value;
  //     setQuery(inputValue);

  //     if (inputValue.length >= 3) {
  //       try {
  //         const response = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${inputValue}`);
  //         setResults(response.data);
  //         setShowDropdown(true); // Show dropdown when there are matching results
  //         setSelectedItem(response.data.length > 0 ? response.data[0] : null); // Default select the top matching suggestion
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     } else {
  //       setResults([]);
  //       setShowDropdown(false); // Hide dropdown when there are no matching results
  //       setSelectedItem(null);
  //     }
  //   };

  //   const handleSelectItem = (item) => {
  //     setSelectedItem(item);
  //     setQuery(item.name);
  //     setShowDropdown(false); // Hide dropdown after selection
  //   };

  //   const handleKeyPress = (event) => {
  //     if (event.key === "Enter" && selectedItem) {
  //       setQuery(selectedItem.name);
  //       setShowDropdown(false); // Hide dropdown on Enter key press
  //     } else if (event.key === "ArrowDown" && results.length > 0) {
  //       event.preventDefault();
  //       const currentIndex = results.indexOf(selectedItem);
  //       const nextIndex = (currentIndex + 1) % results.length;
  //       setSelectedItem(results[nextIndex]);
  //     } else if (event.key === "ArrowUp" && results.length > 0) {
  //       event.preventDefault();
  //       const currentIndex = results.indexOf(selectedItem);
  //       const nextIndex = (currentIndex - 1 + results.length) % results.length;
  //       setSelectedItem(results[nextIndex]);
  //     }
  //   };

  //   useEffect(() => {
  //     // Ensure the selected item is in view when it changes
  //     const dropdown = document.getElementById("dropdown");
  //     if (selectedItem && dropdown) {
  //       const selectedIndex = results.indexOf(selectedItem);
  //       const itemHeight = dropdown.scrollHeight / results.length;
  //       dropdown.scrollTop = selectedIndex * itemHeight - dropdown.clientHeight / 2 + itemHeight / 2;
  //     }
  //   }, [selectedItem, results]);
