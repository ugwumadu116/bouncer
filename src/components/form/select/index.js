import React from "react";
import Select from "./styles";

const SelectGroup = props => {
  return (
    <label>
      {props.label && (
        <>
          {props.label}
          <br />
        </>
      )}
      <Select {...props}>
        <option value="" disabled>
          Select
        </option>
        {props.list.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Select>
    </label>
  );
};

SelectGroup.defaultProps = {
  list: []
};

export default SelectGroup;
