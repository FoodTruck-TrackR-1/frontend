import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import useTruck from "../queries/useTruck";

export default function OperatorTruckMenu({}) {
  // const truck = useTruck({ truck_id });
  // TODO:
  // --> get menu from server
  // --> render menu items
  // // --> group by

  // // working request ⤵️
  // const myMenuQuery = useQuery(`truck/${8}/menu`, () => {
  //   axiosWithAuth()
  //     .get(`operators/trucks/${8}/menu`)
  //     .then((res) => res.data.data);
  // });
  // console.log("OperatorTruckMenu -> myMenuQuery.data:", myMenuQuery.data);

  // return myMenuQuery?.isLoading ? (
  //   <p>Loading Menu...</p>
  // ) : myMenuQuery?.isSuccess ? (
  //   <>
  //     <div className='truck-menu container'>
  //       <h3>{`$ Menu`}</h3>
  //       <ul>
  //         <li className='container'>Chicken Tacos ...... $5.99</li>
  //         <li className='container'>Barbacoa Tacos ...... $6.99</li>
  //         <li className='container'>Rice n Beans ....... $2.99</li>
  //       </ul>
  //     </div>
  //   </>
  // ) : (
    return <div>working on menu </div>
  // );
}
