import React from "react";

const Signup = () => {
  return (
    <div className='container'>
      <h2>Sign Up</h2>
      <div className='form-container'>
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
            <option value='user'>User</option>
          </select>
          <div className='form-submit-container'>
            <button type='submit' value='Submit'>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
