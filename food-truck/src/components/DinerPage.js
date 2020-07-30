import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";

import DinerTrucksList from "./DinerTrucksList";
import DinerFavoritesTrucks from "./DinerFavoriteTrucks";

const DinerPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const DinerPage = () => {
  const { user } = useContext(UserContext);
  console.log("DinerPage -> user", user);

  return (
    <>
      <DinerPageContainer className='container'>
        <DinerTrucksList />
        <DinerFavoritesTrucks />
      </DinerPageContainer>
    </>
  );
};
export default DinerPage;
