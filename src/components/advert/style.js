import Styled from "styled-components";


const AdvertWrapper = Styled.div`
    width: 100%;

    .mex{
        display: flex;  
    }
    .advert {
        max-height: 17.5rem;
        max-width: 24.375rem;
        img{
            width:100%;
            height:auto;
        }      
    }

    @media screen and (max-width: 769px) {
        .mex{
        overflow-x: scroll;  
    }
        .advert {
            min-height: 8rem;
            min-width: 12rem;
        img{
            height: 8rem;
        }

    }
    }
`;


export default AdvertWrapper;
