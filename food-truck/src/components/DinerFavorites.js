import React, { useContext } from "react";

import UserContext from "../contexts/UserContext";
import useFavorites from "../queries/useFavorites";

import DinerFavoritedTruck from "./DinerFavoritedTruck";

export default function DinerFavorites({ setTruckID }) {
  const { user } = useContext(UserContext);
  const favTrucks = useFavorites({ user });
  console.log("favTrucks", favTrucks);

  return (
    favTrucks.isSuccess && (
      <div className='favorites container'>
        <h3>Your favorites</h3>
        <br />
        {favTrucks.isFetching && "Background Fetching..."}
        <ul>
          {favTrucks.data?.map((truck) => (
            <div
              key={truck.truck_id}
              className='container'
              truck_id={truck.truck_id}
              truck={truck}
            >
              <div>{truck.name}</div>
              <button onClick={() => setTruckID(truck.truck_id)}>👀</button>
            </div>
          ))}
        </ul>
      </div>
    )
  );
}
