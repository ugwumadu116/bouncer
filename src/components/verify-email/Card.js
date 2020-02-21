import React from 'react';
import Styled from 'styled-components'

const Card = ({img, msg, detailmsg,color, borderColor}) => {
    return (
        <CardWrapper color={color} borderColor={borderColor}>
            <div className="image">
                <img src={img} alt="msg-logo" />
            </div>
            <div className="bold-message">
                {msg}
            </div>
            <div className="detail-message">
                {detailmsg}
            </div>
        </CardWrapper>
    );
};

export default Card;

const CardWrapper = Styled.div`
    border: 5px solid ${props=>props.color};
    border-radius: 5px;
    margin: 0 auto;
    max-width: 20rem;
    text-align: center;
    color: ${props=>props.borderColor};
    padding: 1rem;
    

    .image{
        margin-left: auto;
        margin-right: auto;
        img{
            width: 10rem;
            color: red;
        }
    }
    .bold-message{
        font-size: 3rem;
        padding: 1rem 0;

    }
    .detail-message{
        font-size: 2rem;
    }
`