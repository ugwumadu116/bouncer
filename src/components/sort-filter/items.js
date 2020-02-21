import React from 'react'
import Styled from 'styled-components'

const Items = ({items}) => {
    return(

        <ItemWrapper>
            {items} {items  > 1 ? 'items' : 'item'}
        </ItemWrapper>
    )
}

export default Items
const ItemWrapper = Styled.div`
    margin: auto 20px;
    text-align: center;
`