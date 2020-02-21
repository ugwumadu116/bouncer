import React, { useState, useEffect } from "react";
import Text from '../text'
import mockData from './mockData'

import {Active, inactive, Wrapper} from './style'

export default function Pagination(props) {
  let mocks = Array(props.pagination)
  .fill({ status: false, value: 0, id: 0 })
  .map(element => ({
    ...element,
    id: (element.id += 1),
    value: (element.value += 1),
    status: element.id === 1 ? (element.status = true) : (element.status = false)
  }));
  const [active, setActive] = useState(mockData);

  const handleActive = e => {
    let myState = active.map(item => ({ ...item, status: false }));
    myState.find(each_item => each_item.id === Number(e.target.innerText)).status = true;
    setActive(myState);
    props.newItem(Number(e.target.innerText)-1)
  };
useEffect(()=>{
  setActive(mocks);
},[props.pagination])


  return (
    <Wrapper secondary>
      {active.map((number, index) => (
        <Text
          style={number.status ? Active : inactive}
          onClick={number.status ?()=>{}:    handleActive}
          key={index}
          large
          as="span"
        >
          {number.value}
        </Text>
      ))}
    </Wrapper>
  );
}
