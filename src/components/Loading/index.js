import React from "react";
import { Container, Paragraph, Loader } from "./style";

const Loading = () => {
  return (
    <Container>
      <Loader />
      <Paragraph>Wait for it...</Paragraph>
    </Container>
  );
};

export default Loading;
