import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userActions";

import { RegisterContainer, Logo, Login, Paragraph } from "./style";
import { Form, TextInput, Button } from "../../components";

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({});
  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleSubmit = (e) => {
    setIsButtonActive(false);
    dispatch(register(registerData));
    if (user) {
      navigate(from, { replace: true });
    }
    setIsButtonActive(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <RegisterContainer>
      <Logo to="/" aria-label="Home" />
      <Form title="Sign Up" onSubmit={handleSubmit}>
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
        <TextInput
          name="password_confirmation"
          type="password"
          placeholder="Repeat Password"
          id="repeat_password"
          onChange={handleChange}
        />
        <Button isactive={isButtonActive}>Create an Account</Button>
        <Paragraph>
          Don't have an account? <Login to="/login">Login</Login>
        </Paragraph>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
