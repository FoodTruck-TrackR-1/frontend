import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const BASE_URL = "https://foodtruck-bw.herokuapp.com/api/";

export default function useAllTrucks() {
  return useQuery("allFoodTrucks", () => {
    return axiosWithAuth()
      .get(`${BASE_URL}diners/trucks`)
      .then((res) => res.data.data);
  });
}
