import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import useMyTrucks from "../queries/useMyTrucks";

import OperatorTrucksList from "./OperatorTrucksList";
import OperatorMenuForm from "./OperatorMenuForm";
import OperatorTruckForm from "./OperatorTruckForm";
import OperatorTruckMenu from "./OperatorTruckMenu";

const OperatorPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function OperatorPage() {
  const { user } = useContext(UserContext);
  console.log("OperatorPage -> user", user);

  const myTrucks = useMyTrucks({ user });

  return (
    <OperatorPageContainer>
      <OperatorTrucksList user={user} />
      <OperatorTruckForm />
      <OperatorMenuForm />
      <OperatorTruckMenu />
    </OperatorPageContainer>
  );
}
