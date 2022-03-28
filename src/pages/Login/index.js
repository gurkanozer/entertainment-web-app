import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";

import { LoginContainer, Logo, SignUp, Paragraph } from "./style";
import { Form, TextInput, Button } from "../../components";

const Login = () => {
  const dispatch = useDispatch();
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [loginData, setLoginData] = useState({});
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsButtonActive(false);
    dispatch(login(loginData));
    if (user) {
      navigate("/", { replace: true });
    }
    setIsButtonActive(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <LoginContainer>
      <Logo to="/" aria-label="Home" />
      <Form title="Login" onSubmit={handleSubmit}>
        <TextInput
          name="email"
          type="email"
          placeholder="Email address"
          id="email"
          onChange={handleChange}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <Button isactive={isButtonActive}>Log in to your account</Button>
        <Paragraph>
          Don't have an account? <SignUp to="/signup">Sign Up</SignUp>
        </Paragraph>
      </Form>
    </LoginContainer>
  );
};

export default Login;
