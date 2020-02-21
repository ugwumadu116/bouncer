import React, { useState, useEffect } from "react";
import SortFilter from "../sort-filter";

import { BlockThumbNail, InlineThumbNail } from "../thumbnails";
import { Wrapper } from "./styles";
import Pagination from "../paginate";


export default function Layout({items=[], ...props}) {
  const [grid, setGrid] = useState(true);
  let display = index => {
    setGrid(!grid);
  };
  let paginateOption = [4,8,12];
  const [end, setEnd] = useState(paginateOption[0]);
  const [itemsPerPage,setItemsPerPage]=useState(paginateOption[0])
  const [pagination, setPagination] = useState(Math.ceil(items.length/paginateOption[0]));
  const [begin,setBegin] = useState(0)


  let paginate = value => {
    setItemsPerPage(Number(value) )
    setPagination(Math.ceil(items.length/value));  
    const newend=begin+Number(value) 
    setBegin(0)
    setEnd(value)
};

let itemChange=value=>{
    const beginning=(Number(value)*itemsPerPage)
    const newend=beginning + itemsPerPage
    setBegin(beginning)
    setEnd(newend);        
};


  return (
    <div className="mt-3 mb-5 container" data-testid="productId">
      <SortFilter
        items={items.length}
        show={paginateOption.filter(element => element <= items.length)}
        paginateBy={paginate}
        displayBy={display}
      />
      <div className="d-flex justify-content-center flex-wrap mt-2">
        {items.slice(begin, end).map((element, key) => (
          <Wrapper key={key}>
            {grid ? (
              <BlockThumbNail stock={element} />
            ) : (
              <InlineThumbNail stock={element} />
            )}
          </Wrapper>
        ))}
      </div>
      
      <Pagination pagination={pagination} newItem={itemChange}/>
    </div>
  );
}
