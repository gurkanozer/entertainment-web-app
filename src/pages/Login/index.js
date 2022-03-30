import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { LoginContainer, Logo, SignUp, Paragraph } from "./style";
import { Form, TextInput, Button, Alert } from "../../components";

const Login = () => {
  const dispatch = useDispatch();
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const systemMessages = useSelector((state) => state.systemMessages);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 character long"),
  });
  const handleOnSubmit = (data) => {
    setIsButtonActive(false);
    dispatch(login(data));
    if (user) {
      navigate("/", { replace: true });
    }
    setIsButtonActive(true);
  };
  useEffect(() => {
    let err = systemMessages.filter((s) => s.type === "login_error");
    setErrorMessage(err[0]);
  }, [systemMessages]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <LoginContainer>
      <Logo to="/" aria-label="Home" />
      <Form title="Login" onSubmit={handleSubmit(handleOnSubmit)}>
        <TextInput
          name="email"
          type="email"
          placeholder="Email address"
          id="email"
          register={register}
          error={errors.email?.message}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          register={register}
          error={errors.password?.message}
        />
        {errorMessage?.message && <Alert text={errorMessage.message} />}
        <Button isactive={isButtonActive}>Log in to your account</Button>
        <Paragraph>
          Don't have an account? <SignUp to="/signup">Sign Up</SignUp>
        </Paragraph>
      </Form>
    </LoginContainer>
  );
};

export default Login;
