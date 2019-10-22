import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { SizeWrapper, ColorDiv, TypographyText, ButtonContainer } from '../../components/mockups';
import { FormInput, CardWrapper } from '../../components/common';

const Home = () => {
    const option = ['item 1', "item 2", "item 3"]
    return (
        <div className="App mockup">

            <SizeWrapper height="850px">
                <h2>hoekd</h2>
                <ColorDiv color="#22262a"> </ColorDiv>
                <ButtonContainer color="#33a0ff" size="16px" width='150px' background="rgba(51, 160, 255, 0.1)">
                    some text <FaShoppingCart size="14px" />
                </ButtonContainer>
                <ButtonContainer color="#33a0ff" size="16px" width='46px' background="rgba(51, 160, 255, 0.1)">
                    <FaHeart size="14px" />
                </ButtonContainer>
                <ButtonContainer color="#fff" size="16px" width='150px' background="#0ad00a">
                    button text
                </ButtonContainer>
                <FormInput
                    name="signup"
                    type="text"
                    inputType="input"
                    label="enter name here"
                    placeholder="enter user name"
                    onChange={() => { }}
                >
                    {option}
                </FormInput>
                <FormInput
                    name="signup"
                    type="text"
                    inputType="select"
                    placeholder="enter user name"
                    onChange={() => { }}
                >
                    {option}
                </FormInput>
                <CardWrapper flex_direction="column">
                </CardWrapper>

                <ButtonContainer opacity="0.1" color="#fff" size="16px" width='150px' background="#33a0ff">
                    button text
      </ButtonContainer>
                <ButtonContainer color="#fff" size="16px" width='150px' background="33a0ff">
                    button text
      </ButtonContainer>
                <TypographyText line_height="1.32" letter_spacing="1.4px" font_size="86px" font_weight="600">this tesxt is for typo</TypographyText>
            </SizeWrapper>

            <Link to={{
                pathname: '/product',
                state: { name: 'test' }
            }}>
                Product link
            </Link>
        </div>
    );
}

export default Home;
