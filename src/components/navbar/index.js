import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Text from "../text";
import { NavbarWrapper, Links, Store, StoreDropdown, Ul } from "./styles";
import Dropdown from "../dropdown";

function Navbar() {
  let navigations = ["IPHONE", "IPAD", "MACBOOK", "ACCESSORIES"];
  return (
    <NavbarWrapper>
      <div
        className="d-flex align-items-center flex-column"
        data-testid="navbarId"
      >
        <Text dangerDarkerColor bold>
          BOUNCER
        </Text>
        <div className="d-flex justify-content-center flex-wrap">
          <Router>
            <Links to="/" as="button">
              HOME
            </Links>
            <Links to="/" as="button">
              <Ul>
                <Store>
                  STORE
                  <StoreDropdown>
                    <Dropdown />
                  </StoreDropdown>
                </Store>
              </Ul>
            </Links>
            {navigations.map((element, key) => (
              <Links key={key} to={`/${element}`} as="button">
                {element}
              </Links>
            ))}
          </Router>
        </div>
      </div>
    </NavbarWrapper>
  );
}
export default Navbar;
