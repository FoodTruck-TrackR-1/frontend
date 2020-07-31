import React from "react";
import useMyTrucks from "../queries/useMyTrucks";

export default function OperatorTrucksList({ user }) {
  const myTrucks = useMyTrucks({ user });
  // console.log("OperatorTrucksList -> myTrucks data", myTrucks.data);

  return (
    <div className='owned-trucks container'>
      <h3>Your Trucks</h3>
      <ul>
        {myTrucks.data?.map((truck) => (
          <li key={truck.id} className='container'>
            {truck.name}
          </li>
        ))}
      </ul>
      <button>add a truck</button>
    </div>
  );
}
