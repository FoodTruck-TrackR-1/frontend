import React, { useEffect } from "react";
import jwt from "jsonwebtoken";

import UserContext from "../contexts/UserContext";

import DinerPage from "./DinerPage";
import OperatorPage from "./OperatorPage";
import useAllTrucks from "../queries/useAllTrucks";

const BASE_URL = "https://foodtruck-bw.herokuapp.com/api/";

const Food = () => {
  const { user, setUser } = React.useContext(UserContext);

  // querying for all trucks (to kind of prefetch for DinerPage) -- STILL LEARNING :)
  const allTrucks = useAllTrucks();

  useEffect(() => {
    const decodedUser = jwt.decode(localStorage.getItem("token"));
    setUser({
      id: decodedUser.id,
      is_operator: decodedUser.is_operator,
      username: decodedUser.username,
      name: decodedUser.name,
    });
    console.log("Food decode useEffect");
  }, [setUser]);

  if (user.id && user.is_operator === true) {
    return (
      <div className='Food container'>
        <OperatorPage />
      </div>
    );
  }
  if (user.id && user.is_operator === false) {
    return (
      <div className='Food container'>
        <DinerPage />
      </div>
    );
  }
  return <div>hi</div>;
};

export default Food;
