import React from "react";
import { useQuery } from "react-query";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function useAllTrucks() {
  return useQuery("allFoodTrucks", async () => {
    return await axiosWithAuth()
      .get(`diners/trucks`)
      .then((res) => res.data?.data);
  });
}
