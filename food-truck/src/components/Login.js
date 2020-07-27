import React from "react";
import styled from 'styled-components'

const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  

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

const Login = () => {
  return (
    <FormContainer className='container'>
      <form>
        <div className='header'>
          <p>Welcome to<br/>Foodtruck TrackR</p>
          <h2>Login</h2>
        </div>
        <div className='inputs'>
          <label>
          username:
          <input 
            name='username'
            type='textbox'
            />
          </label>
          <label>
            passord:
            <input
            name='username'
            type='password'
            placeholder='name@email.com'
            />
          </label>
          <label>
            Login as:
            <select name='user'>
              <option value='operator'>-Select accout type-</option>
              <option value='operator'>Truck Owner</option>
              <option value='diner'>User</option>
            </select>
          </label>
          <button type='submit'>Login</button>
          </div>
      </form>
    </FormContainer>
  );
};

export default Login;
