import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function useMyTrucks({user}) {
  return useQuery(`${user.id}/trucks`, () => {
    return axiosWithAuth()
      .get(`operators/${user.id}/trucks`)
      .then((res) => res.data.data);
  });
}
