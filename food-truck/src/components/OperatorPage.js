import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";

import OperatorTrucksList from "./OperatorTrucksList";
import OperatorMenuForm from "./OperatorMenuForm";
import OperatorTruckForm from "./OperatorTruckForm";
import useMyTrucks from "../queries/useMyTrucks";

const OperatorPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function OperatorPage() {
  const { user } = useContext(UserContext);
  console.log("operator page render");
  
  const myTrucks = useMyTrucks({ user });

  return (
    <OperatorPageContainer>
      <OperatorTrucksList user={user} />
      <OperatorTruckForm />
      <OperatorMenuForm />

      <div className='truck-menu container'>
        <h3>Taco Truck Menu</h3>
        <ul>
          <li className='container'>Chicken Tacos ...... $5.99</li>
          <li className='container'>Barbacoa Tacos ...... $6.99</li>
          <li className='container'>Rice n Beans ....... $2.99</li>
        </ul>
      </div>
    </OperatorPageContainer>
  );
}
