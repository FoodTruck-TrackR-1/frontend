import React from "react";
import useTruck from "../queries/useTruck";
import { useQuery } from "react-query";
import UserContext from "../contexts/UserContext";
import useFavorites from "../queries/useFavorites";

export default function TruckDetailsCard({ truck_id, setTruckID }) {
  const { user } = React.useContext(UserContext);
  // TODO: should render all the truck details
  // -- menu query
  // -- show menu
  const truck = useTruck({ truck_id });
  console.log(truck);
  const favTrucks = useFavorites({ user });
  console.log("truck card getting favs: ", favTrucks);

  return truck.isFetching ? (
    <p>Loading...</p>
  ) : truck.isError ? (
    <p>Oops! Error loading truck, please go back 😅 </p>
  ) : (
    truck.isSuccess && (
      <>
        <h2>{truck.data?.name}</h2>
        <div>{truck.data?.cuisine_type}</div>
        <button onClick={() => setTruckID(-1)}>back</button>
      </>
    )
  );
}
