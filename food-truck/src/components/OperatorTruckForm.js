import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, queryCache } from "react-query";

import UserContext from "../contexts/UserContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function OperatorTruckForm({ toggle }) {
  const { register, handleSubmit } = useForm();
  const { user } = React.useContext(UserContext);

  const [addTruck, addTruckInfo] = useMutation(
    async (values) => {
      console.log("addTruck:", values);
      const newTruck = { ...values, operator_id: user.id };
      console.log("add this truck: mutation ", newTruck);
      await axiosWithAuth().post("operators/trucks", newTruck);
    },
    {
      onSuccess: () => queryCache.invalidateQueries("operator", 3, "trucks"),
    }
  );

  let submitText = addTruckInfo.isLoading
    ? "Saving..."
    : addTruckInfo.isError
    ? "Error!"
    : addTruckInfo.isSuccess
    ? "Saved!"
    : "Add Food Truck";

  return (
    <div className='add-truck-form container'>
      <h3>Add a Food Truck:</h3>
      <form onSubmit={handleSubmit(addTruck)} className='truck-form-add'>
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
          <label>
            Photo (URL)
            <input
              type='text'
              name='truck_image'
              value='URL for Photo'
              ref={register({ required: true })}
            />
          </label>
        </FormInputs>
        <>
          <p>We will build out your menu later! 😁</p>
          <button type='submit' onClick={addTruck}>
            {submitText}
          </button>
          <button onClick={toggle}>back</button>
        </>
      </form>
    </div>
  );
}
