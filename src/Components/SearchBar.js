import React from "react";

function SearchBar ({searchbar}) {
    function handleChange(e) {
       searchbar(e.target.value);
    }

    return (
        <div>
            <input 
              type="text" 
              placeholder="Search your Recent Transactions" 
              onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar