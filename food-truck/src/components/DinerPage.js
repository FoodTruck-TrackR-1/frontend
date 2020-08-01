import React from "react";
import styled from "styled-components";

import DinerFavorites from "./DinerFavorites";
import DinerTrucksList from "./DinerTrucksList";
import TruckDetailsCard from "./TruckDetailsCard";

const DinerPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DinerPage = () => {
  const [truckID, setTruckID] = React.useState(-1);
  return (
    <>
      <DinerPageContainer>
        <DinerTrucksList truckID={truckID} setTruckID={setTruckID} />
        <DinerFavorites setTruckID={setTruckID} />
      </DinerPageContainer>
    </>
  );
};

export default DinerPage;
