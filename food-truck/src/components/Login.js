import React from "react";

const Login = () => {
  return (
    <div className='container'>
      <h2>Login</h2>
      <form>
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
          />
        </label>
        <label>
          Login as:
          <select name='user'>
            <option value='operator'>Operator</option>
            <option value='diner'>Diner</option>
          </select>
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
