import React from "react";
import styled from "styled-components";
import useTruck from "../queries/useTruck";

const StyledFavorite = styled.div`
  display: flex;
`;

export default function DinerFavoritedTruck({ truck, truck_id }) {
  console.log("DinerFavoritedTruck -> truck_id", truck_id);
  const truckQuery = useTruck({ truck_id });
  console.log("DinerFavoritedTruck -> truckQuery", truckQuery);

  return (
    truckQuery.isSuccess && (
      <StyledFavorite className='container'>
        <p>{truck.name}</p>
        <button>X</button>
      </StyledFavorite>
    )
  );
}
