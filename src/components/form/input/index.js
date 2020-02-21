import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Input, Label, Container } from "./styles";

const InputGroup = props => {
  const [hidden, setHidden] = useState(true);
  const pswProps = { ...props, type: hidden?"password":"text" };
  
  const showPassword = () => {
    setHidden(!hidden)
  };

  return (
    <Container>
      {props.type === "password" ? (
        <div>
          <div className="d-flex justify-content-between">
            <Label htmlFor="input"> {props.label} </Label>
            <div className="eye">
              {hidden ? (
                <FaEyeSlash onClick={showPassword} color={false || "#33a0ff"} />
              ) : (
                <FaEye onClick={showPassword} color={false || "#33a0ff"} />
              )}
            </div>
          </div>
          <Input {...pswProps} aria-label="input" aria-required="true" />
        </div>
      ) : (
        <div>
          <Label htmlFor="input"> {props.label} </Label>
          <Input {...props} aria-label="input" aria-required="true" />
        </div>
      )}
    </Container>
  );
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
