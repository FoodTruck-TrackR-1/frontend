import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import UserContext from "../contexts/UserContext";
import { useQuery } from "react-query";

//styles//
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 35%;
  padding: 10px;

  .header {
    text-align: center;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
  }
`;

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(initialFormValues);
  const [disable, setDisable] = useState(true);
  const [errors, setErrors] = useState(initialFormValues);

  const { user, setUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    username: yup.string().required("please enter valid username"),
    password: yup.string().required("please enter password"),
    //how do i ensure username is a valid username?//
  });

  useEffect(() => {
    formSchema.isValid(login).then((valid) => setDisable(!valid));
    // TODO: May have to clean up --getting error referenced in slack...
  }, [formSchema, login]);

  const validateForm = (e) => {
    yup
      .reach(login, "username")
      .validate(e.target.value)
      .then(() => setErrors({ ...errors, [e.target.username]: "" }))
      .catch((err) =>
        setErrors({ ...errors, [e.target.username]: err.errors })
      );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const { push } = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginUser = {
      username: login.username.trim(),
      password: login.password.trim(),
    };
    axios
      .post("https://foodtruck-bw.herokuapp.com/api/auth/login", loginUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // console.log("user logged in: ", res.data.data);
        setLogin(initialFormValues);
        push("/food");
      })
      .catch((err) => console.log("not working", err));
  };
  return (
    <FormContainer className='container'>
      <form onSubmit={handleLogin}>
        {errors.username.length > 0 && <p>{errors.username}</p>}
        <div className='header'>
          <p>
            Welcome to
            <br />
            Food Truck TrackR
          </p>
          <h2>Login</h2>
        </div>
        <div className='inputs'>
          <label>
            Username:
            <input
              name='username'
              value={login.username}
              type='textbox'
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              name='password'
              value={login.password}
              type='password'
              onChange={handleChange}
            />
          </label>
          <button disabled={disable} type='submit'>
            Login
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Login;
