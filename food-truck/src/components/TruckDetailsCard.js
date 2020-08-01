import React from "react";
import { useMutation, queryCache } from "react-query";
import UserContext from "../contexts/UserContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import useTruck from "../queries/useTruck";
import useFavorites from "../queries/useFavorites";

import EditTruckForm from "./EditTruckForm";

export default function TruckDetailsCard({ truck_id, setTruckID }) {
  const { user } = React.useContext(UserContext);
  const [allowEdit, toggleEdit] = React.useReducer((d) => !d, false);

  const truck = useTruck({ truck_id });
  const favTrucks = useFavorites({ user });

  const [addFav, addFavInfo] = useMutation(
    async () => {
      const queryParams = { truck_id: truck.data.id, diner_id: user.id };
      console.log("TruckDetailsCard -> queryParams submit:", queryParams);
      await axiosWithAuth().post("diners/favorites", queryParams);
    },
    {
      onSuccess: () => queryCache.invalidateQueries("diner"),
    }
  );

  //   const [deleteTruck, delTruckInfo] = useMutation( () => {
  //   axiosWithAuth.post("diners/favorites", {truck_id: truck.data.id, user_id: user.id} ).then(res => console.log(res));
  // });

  // const [deleteFav, delFavInfo] = useMutation(())

  return truck?.isSuccess ? (
    <div className='container'>
      {allowEdit ? (
        <EditTruckForm truck_id={truck_id} toggleEdit={toggleEdit} />
      ) : (
        <>
          <h2>{truck.data?.name}</h2>
          <div>{truck.data?.cuisine_type}</div>
          <button onClick={() => setTruckID(-1)}>back</button>
          <>
            {user?.is_operator ? (
              <button onClick={toggleEdit}>Edit</button>
            ) : (
              <button onClick={addFav}>❤️</button>
            )}
          </>
        </>
      )}
    </div>
  ) : truck?.isError ? (
    <p>Oops! Error loading truck, please go back 😅 </p>
  ) : (
    <div>getting data...</div>
  );
}
