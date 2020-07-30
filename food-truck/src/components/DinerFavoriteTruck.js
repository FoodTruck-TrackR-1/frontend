import React from "react";
import styled from "styled-components";

const StyledFavorite = styled.div`
  display: flex;
`;

export default function DinerFavoriteTruck() {
  // TODO:
  //  1. get name of truck from ID-- > dynamically render
  //  2.
  return (
    <>
      <StyledFavorite className='container'>
        <p>Favorite Truck </p>
        <button>X</button>
      </StyledFavorite>
    </>
  );
}
