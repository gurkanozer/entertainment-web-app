import React from "react";
import { Input, Label, InputContainer } from "./style";

const TextInput = ({
  id,
  label,
  name,
  placeholder,
  onChange,
  register,
  error,
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
        {...register(name)}
        error={error ? true : false}
      />
      <Label htmlFor={id}>{label}</Label>
    </InputContainer>
  );
};

export default TextInput;
