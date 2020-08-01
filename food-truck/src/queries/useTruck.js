import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function useTruck({ truck_id }) {
  return useQuery(
    ["truck", truck_id],
    async () => {
      return await axiosWithAuth()
        .get(`diners/trucks/${truck_id}`)
        .then((res) => res.data.data);
    },
    {
    }
  );
}
