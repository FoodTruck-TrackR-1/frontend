import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import formSchema from './formSchema';

const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;

  .form-header {
    text-align: center;
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }
`;

const initFormValues = {
  name: '',
  username: '',
  password: '',
  validPassword: '',
  is_operator: false
}

const initErrorValues = {
  name: '',
  username: '',
  password: '',
  validPassword: ''
}

const initBtnDisable = true;

const Signup = () => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [errors, setErrors] = useState(initErrorValues);
  const [btnDisable, setBtnDisable] = useState(initBtnDisable);

  const onValidPassErr = (evt) => {
    const { name, value } = evt.target;
    const schema = yup.string().matches(formValues.password);
    
    schema.isValid(value)
      .then(res => {
        if(!res) {
          setErrors({
            ...errors,
            [name]: "Password does not match."
          })
        } else {
          setErrors({
            ...errors,
            [name]: ''
          })
        }
      }).catch(err => {
        debugger;
      })

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const formValueChange = (evt) => {
    const { name, value } = evt.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors,
          [name]: ''
        })
      }).catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      });

      setFormValues({
        ...formValues,
        [name]: value
      });
  };

  const onCheckboxChange = (evt) => {
    const { name } = evt.target;
    const isChecked = evt.target.checked;
    setFormValues({
      ...formValues,
      [name]: isChecked,
    });
  };

  const { push } = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      is_operator: formValues.is_operator
    }

    axios.post('https://foodtruck-bw.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        alert("User account has been created, thank you!");
        localStorage.setItem('token', res.data.token);
        setFormValues(initFormValues);
        console.log(res.data)
        push('/food')
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        if(valid) {
          let schema = yup.string().matches(formValues.password);
          schema.isValid(formValues.validPassword)
            .then(res => {
              if(res) {
                setBtnDisable(false);
              } else {
                setErrors({
                  ...errors,
                  ['validPassword']: "Passwords do not match."
                })
                setBtnDisable(true);
              }
            }).catch(err => {
              setErrors({
                ...errors,
                ['other']: err.errors[0]
              })
            })
        } else {
          setBtnDisable(true);
        }
      })
  }, [formValues])

  return (
    <FormContainer className='container'>
      <form onSubmit={onSubmit}>
        <div className='form-header'>
          <p>Welcome to<br/>Foodtruck TrackR</p>
          <h2>Sign Up</h2>
          <div className='err-container'>
            <div className='error'>{errors.name}</div>
            <div className='error'>{errors.username}</div>
            <div className='error'>{errors.password}</div>
            <div className='error'>{errors.validPassword}</div>
          </div>
        </div>
        <div className='form-inputs'>
          <label>Name: </label>
          <input type='text' name='name' placeholder='Name' value={formValues.name} onChange={formValueChange}/>
          <label>Username: </label>
          <input type='text'name='username' placeholder='Username' value={formValues.username} onChange={formValueChange}/>
          <label>Password: </label>
          <input type='password' name='password' placeholder='Password' value={formValues.password} onChange={formValueChange}/>
          <label>Confirm Password: </label>
          <input type='password' name='validPassword' placeholder='Confirm Password' value={formValues.validPassword} onChange={onValidPassErr}/>
          <label>Sign Up As: </label>
          {/* <select onChange={formValueChange} value={formValues.accountType} name='accountType'>
            <option disabled value=''>- Select account type -</option>
            <option value='diner'>User</option>
            <option value='operator'>Truck Owner</option>
          </select> */}
          <label>Food Truck Operator?:&nbsp;</label>
          <input
            checked={formValues.is_operator}
            onChange={onCheckboxChange}
            name='is_operator'
            type='checkbox'
          />
          <div className='form-submit-container'>
            <button disabled={btnDisable} type='submit' value='Submit'>Sign Up</button>
          </div>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signup;
