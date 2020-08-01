import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import useMyTrucks from "../queries/useMyTrucks";

import OperatorTrucksList from "./OperatorTrucksList";
import OperatorMenuForm from "./OperatorMenuForm";
import OperatorTruckForm from "./OperatorTruckForm";
import OperatorTruckMenu from "./OperatorTruckMenu";
import TruckDetailsCard from "./TruckDetailsCard";

const OperatorPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function OperatorPage() {
  const { user } = useContext(UserContext);
  const [truckID, setTruckID] = React.useState(-1);
  console.log("OperatorPage -> user", user);

  const myTrucks = useMyTrucks({ user });

  return (
    <>
      {truckID > -1 ? (
        <TruckDetailsCard truck_id={truckID} setTruckID={setTruckID} />
      ) : (
        <OperatorPageContainer>
          <OperatorTrucksList user={user} setTruckID={setTruckID} />
          <OperatorMenuForm />
          <OperatorTruckMenu truck_id={truckID} operator_id={user.id} />
        </OperatorPageContainer>
      )}
    </>
  );
}
