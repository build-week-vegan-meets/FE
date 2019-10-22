import React from "react";
import {colors} from '../../colors';
import styled from 'styled-components';

const SearchStyle = styled.div`
}
input {
  margin-top: 32px;
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  background: ${colors.white};
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 10px;
}
`

function Search(props){
    return (
        <SearchStyle>
        <input type="text" placeholder="Search for food, city, etc." onChange={props.handleChange} />
        </SearchStyle>
    )
    
}
export default Search;