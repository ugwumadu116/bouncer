import React from "react";
import Styled from "styled-components";
import { ButtonContainer } from "../../components/mockups";

const SearchProducts = () => {
  const BestSaleDIV = Styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 137px 0px;
        margin-bottom: 47px;
        
    `;
    const UrlInput = Styled.input`
        width: 480px;
        height: 55px;
        padding: 0px 6px 0px 20px;
        border: solid 2px #f1f3f4;
    `;

  return (
    <>
      <BestSaleDIV>
        <form>
          <UrlInput name="search" type="text" placeholder="Search query..." />
          <ButtonContainer
            opacity="normal"
            color="#fff"
            size="14px"
            height="60px"
            width="150px"
            background="#2e90e5"
          >
            Search
          </ButtonContainer>
        </form>
      </BestSaleDIV>
    </>
  );
};

export default SearchProducts;
