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

const Button = styled.button`
width: 100px;
height: 30px;
margin: 2% 2% 0 2%;
border: 1px solid black
border-radius: 5px;
`;



const Nav = () => {
  return (
    <NavContainer>
      <div>
        <h1>
          <span className="veganheader">Vegan</span>Meets
        </h1>
      </div>
      <ButtonContainer>
          <Button>Account</Button>
          <Button>Log in</Button>
          <Button>Sign up</Button>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Nav;
