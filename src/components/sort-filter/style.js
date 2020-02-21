import React from 'react'
import Styled from 'styled-components'
import {MdMenu, MdApps} from "react-icons/md"

import backgroundColor from "../color/mixins"

export const SortFilterStyle = Styled.div`
    ${backgroundColor}
    margin: auto 0;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        justify-content: space-between;
        text-align: center;

        .select{
            border: 0.5px solid
            border-color: #f1f3f4
        }
        .sortby, .show{
            margin-left: 25px
            p{
                text-align:center
                margin: auto 0;
                
                
            }
        }
    }
    label{
        display:flex;
        justify-content: center;
        align-item: center;
        margin: auto 25px;
        align-text: center
    }
    @media screen and (max-width: 600px){
        .sortby, .show{
            display: none;
        }
    }

`

export const ToggleWrapper = Styled.div`
font-size: 35px;
display: block;
justify-content: space-between;
margin: auto 0;
div{
    padding: 10px;
    cursor: pointer
}

`
export const data = [
    {id: 0, status:true, icon: <MdApps />}, 
    {id:1, status: false, icon:<MdMenu />}
]
