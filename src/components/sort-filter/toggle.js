import React, {useState} from "react"

import { primary, secondaryDark } from '../color/color'
import {ToggleWrapper, data} from './style'

const Toggle = (props) => {
    const [toggle, setToggle] = useState(data)

    const handleToggle = (index) => {
        let status = toggle.map((item) => ({...item, status:false}))
        let clicked = status.find(clickedItem => clickedItem.id === index)
        clicked["status"] = true
        setToggle(status)
        props.onClick(index)
    }

    const active = {color: primary}
    const inActive = {color: secondaryDark}
    return (
        <ToggleWrapper>
            {toggle.map((icon, index)=> (
                <div 
                    onClick={() =>handleToggle(index) } 
                    key={index} 
                    style={icon.status ? active : inActive} 
                    id={index}
                    >{icon.icon}
                </div>
            ))}
        </ToggleWrapper>
    )
}
export default Toggle
