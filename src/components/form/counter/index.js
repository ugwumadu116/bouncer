import React from "react";
import StyledCounter from "./styles";

const Counter = ({counter, setCounter,...props}) => {
  

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <StyledCounter {...props}>
      <div onClick={handleDecrement}>-</div>
      <span>{counter}</span>
      <div onClick={handleIncrement}> + </div>
    </StyledCounter>
  );
};

export default Counter;
