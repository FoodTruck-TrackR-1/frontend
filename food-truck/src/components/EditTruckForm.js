import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, queryCache } from "react-query";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import useTruck from "../queries/useTruck";

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function EditTruckForm({ truck_id, toggleEdit }) {
  const truck = useTruck({ truck_id });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: truck?.data?.name || "",
      cuisine_type: truck?.data?.cuisine_type || "",
      truck_image: truck?.data?.truck_image,
    },
  });

  const [submitTruckEdit, truckEditInfo] = useMutation(
    async (values) => {
      const editedTruck = { ...values, operator_id: truck.operator_id };
      await axiosWithAuth().put(`operators/trucks/${truck_id}`, editedTruck);
    },
    {
      onSuccess: async () => {
        queryCache.invalidateQueries("truck");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toggleEdit();
      },
    }
  );

  let submitText = truckEditInfo.isLoading
    ? "Saving..."
    : truckEditInfo.isError
    ? "Error!"
    : truckEditInfo.isSuccess
    ? "Saved!"
    : "Submit Changes";

  return (
    <form onSubmit={handleSubmit(submitTruckEdit)}>
      <FormInputs>
        <label htmlFor='title'>Name of Truck: </label>
        <input
          type='text'
          name='name'
          ref={register({ required: true })}
          required
        />
        <br />
        <br />
        <label htmlFor='title'>Cuising Typed: </label>
        <input
          type='text'
          name='cuisine_type'
          ref={register({ required: true })}
          required
        />
        <br />
        <br />
        <label htmlFor='photo'>📸</label>
        <input
          type='text'
          name='truck_image'
          ref={register({ required: true })}
        />
        <br />
        <div>
          <button type='submit'>{submitText}</button>
          <button onClick={toggleEdit}>go back</button>
        </div>
      </FormInputs>
    </form>
  );
}
