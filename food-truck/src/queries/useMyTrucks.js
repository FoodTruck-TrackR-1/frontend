import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const BASE_URL = "https://foodtruck-bw.herokuapp.com/api/";

export default function useMyTrucks({user}) {
  return useQuery(`${user.id}/trucks`, () => {
    return axiosWithAuth()
      .get(`${BASE_URL}operators/${user.id}/trucks`)
      .then((res) => res.data.data);
  });
}
