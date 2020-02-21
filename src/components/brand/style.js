import Styled from "styled-components";
import theme from "../theme";

const Wrapper = Styled.div`
    background-color:${theme.colors.secondaryLighter};
    padding: 1.125rem 1.25rem;
    .search-list{
        .search-item{
            display: flex;
            justify-content: space-between;
        }
    }
`;

export default Wrapper;
