import React, { useContext } from "react";
import styled from "styled-components";

// import UserContext from "../contexts/UserContext";

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
      {truckID > -1 ? (
        <TruckDetailsCard truck_id={truckID} setTruckID={setTruckID} />
      ) : (
        <DinerPageContainer>
          <DinerTrucksList setTruckID={setTruckID} />
          <DinerFavorites setTruckID={setTruckID} />
        </DinerPageContainer>
      )}
    </>
  );
};
export default DinerPage;
