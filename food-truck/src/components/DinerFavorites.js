import React, { useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import UserContext from "../contexts/UserContext";
import useFavorites from "../queries/useFavorites";
import { useMutation, queryCache } from "react-query";

export default function DinerFavorites({ setTruckID }) {
  const { user } = useContext(UserContext);
  const favTrucks = useFavorites({ user });

  const [deleteFav, deleteFavInfo] = useMutation(
    async (favId) => {
      await axiosWithAuth().delete(`diners/favorites/${favId}`);
    },
    {
      onSuccess: () => queryCache.invalidateQueries("diner"),
    }
  );

  return (
    favTrucks.isSuccess && (
      <div className='favorites container'>
        <h3>Your favorites</h3>
        <br />
        {favTrucks.isFetching && "Background Fetching..."}
        <br />
        <ul>
          {favTrucks?.data?.map((truck) => (
            <div
              key={truck.id}
              className='container'
              truck_id={truck.truck_id}
              truck={truck}
            >
              <div>{truck.name}</div>
              <button onClick={() => setTruckID(truck.truck_id)}>👀</button>
              <button onClick={() => deleteFav(truck.id)}>X</button>
            </div>
          ))}
        </ul>
      </div>
    )
  );
}
