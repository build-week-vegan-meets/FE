import React from "react";
import { NavLink, Route } from "react-router-dom"
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
background-color: #52BA5D;
padding-right: 2%;
`;

const Button = styled(NavLink)`
width: 100px;
height: 30px;
margin: 2% 2% 0 2%;
border: 1px solid black
border-radius: 5px;
text-decoration: none;
color:white;
padding-left: 3%;
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
          <Button to={`/`}>Account</Button>
          <Button to={`/login`}>Log in</Button>
          <Button to={`/signup`}>Sign up</Button>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Nav;
