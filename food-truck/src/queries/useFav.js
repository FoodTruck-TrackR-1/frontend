import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function useFav({ user, truck }) {
  return useQuery(
    `diner/${user.id}/favorite/${truck.id}`,
    async () => {
      return await axiosWithAuth()
        .get(`diners/favorites`)
        .then((res) => res.data.data);
    },
    {
      staleTime: 5000,
    }
  );
}
