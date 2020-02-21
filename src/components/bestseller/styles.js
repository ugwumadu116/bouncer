import Styled from "styled-components";
import BackgroundColor, { color } from "../color/mixins";



export const BestSellerContainer = Styled.div`
        
    
    ${BackgroundColor}
    ${color}
    li{
        cursor:pointer;

    }
    .active{
        border-bottom: 3px #33a0ff solid;
    }
    .loadMore{
        
        cursor:pointer;
    }
`;
