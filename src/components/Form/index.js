import React from "react";
import { FormContainer, Title } from "./style";

const Form = ({ onSubmit, title, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{title}</Title>
      {children}
    </FormContainer>
  );
};

export default Form;
