import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Styled from 'styled-components';
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";

const NavOne = () => {
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
    `;
    const NavOneChild = Styled.div`
        display:flex;
    `;
    const SelectDOM = Styled.select`
        border: none;
        width: 50px;
        margin-left: 10px;
        background: transparent;
    `;
    return (
        <div>
            <div className="naveOneDiv">
                <HomeNavOne>
                    <NavOneChild >
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
                            <h5 className="shiftItem">0 items</h5>
                            <h5 className="shiftItem2">$0.00</h5>
                        </NavOneChild>
                        <FaSearch className="shiftItem" />
                    </NavOneChild>

                </HomeNavOne>
            </div>
            <div className="logo_space">
                <img src={Logo} alt="logo"/>
            </div>
            <HomeNavTwo >
                <h4>Home</h4>
                <h4>Store</h4>
                <h4>Iphone</h4>
                <h4>IPAD</h4>
                <h4>MACBOOK</h4>
                <h4>ACCESSORIES</h4>
            </HomeNavTwo>

            
        </div>
        
    );
}

export default NavOne;
