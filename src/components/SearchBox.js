import React from "react";

const SearchBox = ({onSearchChange})=>{
    return (
        <input 
            className="pa3 ba b--green bg-lightest-blue ma2"
            type="text"
            placeholder="Search for a robot"
            onChange={onSearchChange}/>
            
    )
}


export default SearchBox;