import React from "react";
import { NavLink, Route } from "react-router-dom"
import {colors} from '../../colors';
import styled from "styled-components";

const NavContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-between
padding: 0 2% 0 2%;
`;

const ButtonContainer = styled.div`
width 80%;
display:flex;
justify-content: flex-end;
background-color: ${colors.fern};
padding-right: 4%;
`;

const Button = styled(NavLink)`
width: 100px;
height: 50px;
margin: auto 2%;
text-align: center;
border: 1px solid black;
background-color: white;
border-radius: 5px;
text-decoration: none;
background-color:${colors.fern};
color: white;
vertical-align: center;

`;

const Vegan = styled.span`
color:#52BA5D;
`;



const Nav = () => {
  return (
    <NavContainer>
      <div>
        <h1>
          <Vegan>Vegan</Vegan>Meets
        </h1>
      </div>
      <ButtonContainer>
          <Button to={`/`}>Homepage</Button>
          <Button to ={'/favorites'}>Favorites</Button>
          <Button to={`/resturants`}>Add New Restaurant</Button>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Nav;