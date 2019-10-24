import React, {useState, useEffect} from "react";
import {colors} from '../../colors';
import styled from 'styled-components';

const SearchStyle = styled.div`
input{
  margin-top: 32px;
  padding: 0.5rem;
  font-size: 16px;
  width: 50%;
  display: block;
  background: ${colors.white};
  border: 1px solid ${colors.fern};
  border-radius: 10px;
}
`

function Search(props){
    // const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState([]);
  
    // useEffect(() => {
    //   const results = restaurants.filter(restaurant =>
    //     restaurant.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setSearchResults(results);
    // }, [searchTerm]);

    // const handleChange = event => {
    //   setSearchTerm(event.target.value);
    // };

    return (
        <SearchStyle>
        <input 
        type="search" 
        placeholder="Search for food, city, etc."  
        onChange={props.handleChange} 
        />
        </SearchStyle>
    )
    
}
export default Search;