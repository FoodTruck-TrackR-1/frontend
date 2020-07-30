import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function OperatorMenuForm() {
  const { register, handleSubmit } = useForm();

  return (
    <div className='add-truck-form container'>
      <h3>Add a Food Truck:</h3>
      <form onSubmit={handleSubmit()} className='truck-form-add'>
        <FormInputs>
          <label>
            Name of Truck:
            <input
              type='text'
              name='name'
              placeholder='Tasty Tasty Tacos'
              ref={register({ required: true })}
            />
          </label>
          <label>
            Cuisine Type
            <input
              type='text'
              name='cuisine_type'
              placeholder='Mexican'
              ref={register({ required: true })}
            />
          </label>
          <p>We will build out your menu later! :)</p>
          <input type='submit' />
        </FormInputs>
      </form>
    </div>
  );
}
