import React from "react";
import styled from "styled-components";
import useMyTrucks from "../queries/useMyTrucks";
import OperatorTruckForm from "./OperatorTruckForm";

const StyledTruckList = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default function OperatorTrucksList({ user, setTruckID }) {
  const myTrucks = useMyTrucks({ user });
  console.log("OperatorTrucksList -> myTrucks data", myTrucks.data);

  const [show, toggle] = React.useReducer((d) => !d, false);

  return show ? (
    <OperatorTruckForm toggle={toggle} operator_id={user.id} />
  ) : (
    <>
      <div className='owned-trucks container'>
        <h3>Your Trucks</h3>
        <StyledTruckList>
          {myTrucks?.data?.map((truck) => (
            <div key={truck.id} className='container'>
              {truck.name}
              <button onClick={() => setTruckID(truck.id)}>👀</button>
            </div>
          ))}
        </StyledTruckList>
        <button onClick={toggle}>add a truck</button>
      </div>
    </>
  );
}
