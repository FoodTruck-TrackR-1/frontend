import React from "react";
import styled from "styled-components";
import DinerFavoriteTruck from "./DinerFavoriteTruck";

export default function DinerFavorites() {
  return (
    <div className='favorites container'>
      <h3>Your favorites</h3>
      <ul>
        <DinerFavoriteTruck />
        <DinerFavoriteTruck />
      </ul>
    </div>
  );
}
