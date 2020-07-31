import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function useFavorites({ user }) {
  return useQuery(["diner", user.id, "favorites"], async () => {
    return await axiosWithAuth()
      .get(`diners/${user.id}/favorites`)
      .then((res) => res.data.data);
  });
}
