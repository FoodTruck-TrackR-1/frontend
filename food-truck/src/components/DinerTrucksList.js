import React from "react";

export default function DinerTruckList() {
  return (
    <div className='truck-list-container'>
      <h2>Trucks in your area</h2>
      <div className='truck-list'>
        <div className='truck-card container'>
          <p> Taco Truck</p>
          <button>Menu</button>
          <button>♥︎</button>
        </div>
        <div className='truck-card container'>
          <p> Pizza Truck</p>
          <button>Menu</button>
          <button>♥︎</button>
        </div>
        <div className='truck-card container'>
          <p> Smoothie Truck</p>
          <button>Menu</button>
          <button>♥︎</button>
        </div>
      </div>
    </div>
  );
}
