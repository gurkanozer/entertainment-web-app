import React from "react";
import { Input, Label, InputContainer } from "./style";

const TextInput = ({
  id,
  label,
  name,
  placeholder,
  onChange,
  type = "text",
}) => {
  return (
    <InputContainer>
      <Input
        onChange={onChange}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <Label htmlFor={id}>{label}</Label>
    </InputContainer>
  );
};

export default TextInput;
