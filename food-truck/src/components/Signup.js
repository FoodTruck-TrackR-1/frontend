import React from "react";
import styled from 'styled-components';

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

const Signup = () => {
  return (
    <FormContainer className='container'>
      <form>
        <div className='form-header'>
          <p>Welcome to<br/>Foodtruck TrackR</p>
          <h2>Sign Up</h2>
        </div>
        <div className='form-inputs'>
          <label>Email: </label>
          <input type='email' placeHolder='Email@example.com' />
          <label>Password: </label>
          <input type='password' placeHolder='Password of 6 chars min' />
          <label>Confirm Password: </label>
          <input type='password' placeHolder='Confirm Password' />
          <label>Sign Up As: </label>
          <select name='account-type'>
            <option value=''>- Select account type -</option>
            <option value='diner'>User</option>
            <option value='operator'>Truck Owner</option>
          </select>
          <div className='form-submit-container'>
            <button type='submit' value='Submit'>Sign Up</button>
          </div>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signup;
