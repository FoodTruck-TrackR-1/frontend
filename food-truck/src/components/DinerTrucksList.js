import React from "react";
import { useQuery, queryCache } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import useAllTrucks from "../queries/useAllTrucks";

export default function DinerTruckList({ setTruckID }) {
  const allTrucks = useAllTrucks();
  console.log("allTrucks", allTrucks.data);

  return (
    allTrucks.isSuccess && (
      <div className='truck-list-container'>
        <h2>Trucks in your area</h2>
        <div className='truck-list'>
          {allTrucks.data?.map((truck) => (
            <div
              key={truck.id}
              className='container'
              setTruckID={setTruckID}
              id={truck.id}
            >
              {truck.name}
              <button onClick={() => setTruckID(truck.id)}>👀</button>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
