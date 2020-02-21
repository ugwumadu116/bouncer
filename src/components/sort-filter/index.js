import React from "react"

import Items from "./items"
import Toggle from "./toggle"

import {SortFilterStyle } from './style'
import SelectGroup from '../form/select'

const SortFilter = ({items,...props}) => {
    const handleClick = (e)=>{
        let value = e.target.value
        props.paginateBy(value)
    }
    const handleDisplay = (index)=>{
        props.displayBy(index)
    }
    const handleSort = (e) => {
        props.sortBy(e.target.value)
    }
    return (
        <SortFilterStyle secondary data-testid='sort-filter'>
            <div className='sort-wrapper'>
                <Items items={items}/>
                <div className='sortby'>
                    <p>SortBy</p>
                    <SelectGroup onChange={handleSort} className='select' list={['Name', 'Size']} xsmall  secondary/>
                </div>
                <div className='show'>
                    <p>Show</p>
                    <SelectGroup className='select' list={props.show} onChange={handleClick}  xsmall  secondary/>
                </div>
            </div>
            <Toggle onClick={handleDisplay}/>
        </SortFilterStyle>
    )
};
export default SortFilter

SortFilter.defaultProps = {
    items:2,
    displayBy: (index) =>  index,
    showBy: (value) => value,
    show:[1,2,3,4],
    sortBy: (value) => value
}