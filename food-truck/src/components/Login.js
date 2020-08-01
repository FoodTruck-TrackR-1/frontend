import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

import { Button, TextField, makeStyles } from "@material-ui/core";

//styles//
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    width: "40%",
    marginLeft: "30%",
    marginTop: "3%",
    padding: "3%",
    borderRadius: "20px",
    boxShadow: "0px 1px 6px -2px rgb(128, 127, 127)",
    fontFamily: "Montserrat, sans-serif",

    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "50%",
  },
  title: {
    fontSize: "1.5rem",
  },
}));
//end of styles//

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(initialFormValues);
  const [disable, setDisable] = useState(true);
  const [errors, setErrors] = useState(initialFormValues);

  const classes = useStyle();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, "You must provide a username")
      .required("username is required"),
    password: yup
      .string()
      .min(1, "You must provide a password")
      .required("Password is required"),
  });

  useEffect(() => {
    formSchema.isValid(login).then((valid) => setDisable(!valid));
    // TODO: May have to clean up --getting error referenced in slack...
  }, [formSchema, login]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors,
        });
      });

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
    <div className={classes.root}>
      <form onSubmit={handleLogin}>
        <div className='header'>
          <p className={classes.title}>
            Welcome to
            <br />
            Food Truck TrackR
          </p>
        </div>
        <div className='errors'>
          <p>{errors.username}</p>
          <p>{errors.password}</p>
        </div>
        <div className='inputContainer'>
          <div className='inputs'>
            <label>
              <TextField
                required
                label='Username'
                variant='outlined'
                name='username'
                value={login.username}
                type='textbox'
                onChange={handleChange}
              />
            </label>
            <label>
              <TextField
                required
                label='Password'
                variant='outlined'
                name='password'
                value={login.password}
                type='password'
                onChange={handleChange}
              />
            </label>
            <Button className={classes.submit} disabled={disable} type='submit'>
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
