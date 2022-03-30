import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/userActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { RegisterContainer, Logo, Login, Paragraph } from "./style";
import { Form, TextInput, Button, Alert } from "../../components";

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState({});
  const systemMessages = useSelector((state) => state.systemMessages);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(true);
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 character long"),
    password_confirmation: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const handleOnSubmit = (data) => {
    setIsButtonActive(false);
    dispatch(signUp(data));
    if (user) {
      navigate(from, { replace: true });
    }
    setIsButtonActive(true);
  };
  useEffect(() => {
    let err = systemMessages.filter((s) => s.type === "register_error");
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
    <RegisterContainer>
      <Logo to="/" aria-label="Home" />
      <Form title="Sign Up" onSubmit={handleSubmit(handleOnSubmit)}>
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
        <TextInput
          name="password_confirmation"
          type="password"
          placeholder="Repeat Password"
          id="repeat_password"
          register={register}
          error={errors.password_confirmation?.message}
        />
        {errorMessage?.message && <Alert text={errorMessage.message} />}
        <Button isactive={isButtonActive}>Create an Account</Button>
        <Paragraph>
          Don't have an account? <Login to="/login">Login</Login>
        </Paragraph>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
