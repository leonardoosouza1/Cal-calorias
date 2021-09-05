import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function NavBar() {
  return (
    <Container>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
        <div>MENU</div>
      </div>
    </Container>
  );
}

export default NavBar;
