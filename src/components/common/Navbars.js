import React, {useContext} from 'react';
import Logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";
import Styled from 'styled-components';
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const NavOne = ({ navLinks }) => {
  const { cart } = useContext(CartContext)
  
  return (
    <div>
      <div className="naveOneDiv">
        <HomeNavOne>
          <NavOneChild>
            <SelectDOM>
              <option>En</option>
              <option>IGBO</option>
            </SelectDOM>
            <SelectDOM>
              <option>USD</option>
              <option>NGN</option>
            </SelectDOM>
          </NavOneChild>
          <NavOneChild>
            <FaUser color="#22262a" />
            <h5 className="shiftItem">My Profile</h5>
            <NavOneChild>
              <FaShoppingBag className="shiftItem" />
              <NavLink to="/cart" activeStyle={{ color: "#33a0ff" }} exact>
                <h5 className="shiftItem">
                  {cart.bouncerProducts.length} items
                </h5>
              </NavLink>

              <h5 className="shiftItem2">${cart.total}</h5>
            </NavOneChild>
            <FaSearch className="shiftItem" />
          </NavOneChild>
        </HomeNavOne>
      </div>
      <div className="logo_space">
        <img src={Logo} alt="logo" />
      </div>
      <HomeNavTwo>
        <NavLink to="/" activeStyle={{ color: "#33a0ff" }} exact>
          Home
        </NavLink>
        <NavLink to="/product" activeStyle={{ color: "#33a0ff" }} exact>
          Store
        </NavLink>
        <h4>Iphone</h4>
        <h4>IPAD</h4>
        <h4>MACBOOK</h4>
        <h4>ACCESSORIES</h4>
      </HomeNavTwo>
    </div>
  );
};

const HomeNavOne = Styled.section`
        max-width: 1139px;
        height: 46px;
        margin: 0px auto;
        background-color: #ffffff;
        display:flex;
        justify-content:space-between;
        align-items: center;
    `;
const HomeNavTwo = Styled.section`
        margin: 0px auto;
        max-width: 660px;
        height: 19px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.35px;
        text-align: center;
        color: #22262a;
        a{
          text-decoration: none;
          color: inherit;
        }
    `;
const NavOneChild = Styled.div`
        display:flex;
        a{
          text-decoration: none;
          color: inherit;
        }
    `;
const SelectDOM = Styled.select`
        border: none;
        width: 50px;
        margin-left: 10px;
        background: transparent;
    `;

NavOne.defaultProps = {
  navLinks: [
    {
      name: "home",
      path: "/"
    },
    {
      name: "store",
      path: "/product"
    }
  ]
};
export default NavOne;
