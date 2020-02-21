import React, { useState } from "react";
import { FaUserAlt, FaShoppingBasket} from "react-icons/fa";
import { Head, Pricing, Links, Go, Search } from "./styles";
import {BrowserRouter as Router} from "react-router-dom"
import SelectGroup from '../form/select/index'
function Header({ ...props }) {
  const [search, setSearch] = useState(false);
  let language = ["EN", "YR", "FR ", "IG"];
  let currency = ["USD", "NGN", "YEN"];
  let toggleSearch = () => {
    setSearch(!search);
  };
  return (
    <Head {...props} data-testid="headerId">
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="d-flex">
          <SelectGroup list={language} sm secondaryLight></SelectGroup>
          <SelectGroup list={currency} sm secondaryLight></SelectGroup>
        </div>
        <div className="d-flex align-items-center">
          
            <div className="profile">
            <Router>
            <Links to="/">
              <FaUserAlt /> My profile
            </Links>
            </Router>
          </div>
          <div className="cart">
            <Router>
            <Links to="/">
              <FaShoppingBasket /> 0 items{" "}
              <Pricing secondaryDarkColor> $0.00</Pricing>
            </Links>
            </Router>
          </div>
          
          
          <div className="search-icons cursor">
            <Search onClick={toggleSearch} />
          </div>
        </div>
      </div>

      {search && (
        <div className="container d-flex justify-content-between">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Your Search here"
          />

          <Go primaryColor />
        </div>
      )}
    </Head>
  );
}

export default Header;
