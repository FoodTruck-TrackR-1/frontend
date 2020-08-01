import React from "react";
import useAllTrucks from "../queries/useAllTrucks";
import TruckDetailsCard from "./TruckDetailsCard";

export default function DinerTruckList({ truckID, setTruckID }) {
  const allTrucks = useAllTrucks();

  return (
    <>
      {truckID > -1 ? (
        <TruckDetailsCard truck_id={truckID} setTruckID={setTruckID} />
      ) : (
        allTrucks.isSuccess && (
          <div>
            <h2>Trucks in your area</h2>
            <div className='truck-list container'>
              {allTrucks.data?.map((truck) => (
                <div
                  key={truck.id}
                  className='container'
                  setTruckID={setTruckID}
                  id={truck.id}
                  truck={truck}
                >
                  {truck.name}
                  <button onClick={() => setTruckID(truck.id)}>👀</button>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
}
