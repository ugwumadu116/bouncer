import React from "react";
import { Logo } from "./styles";
import { Link } from "react-router-dom";



const NavLogo = () => {
  return (
    <div className="pt-5 container pb-5" >
        <Logo>
      <Link to="/">
          <img
            src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576505112/bouncer-frontend/logo_alcxme.svg"
            alt="logo"
          />
      </Link>
        </Logo>
    </div>
  );
};

export default NavLogo;
