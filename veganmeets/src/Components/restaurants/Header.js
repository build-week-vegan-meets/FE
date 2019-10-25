import React from "react";
import styled from "styled-components"

const Vegan = styled.span`
color:#52BA5D;
margin-left:3%;
`;

const Header = () => {
  return (
    <div className="headerContainer">
      <h1>
        <Vegan>Vegan</Vegan>Meets
      </h1>
    </div>
  );
};

export default Header;
