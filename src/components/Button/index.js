import React from "react";
import { Input } from "./style";

const Button = ({ isactive, onClick, children }) => {
  return (
    <Input onClick={onClick} disabled={!isactive}>
      {children}
    </Input>
  );
};

export default Button;
