import axios, { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { tempCartType } from "../store/cartList";

const fetching = (
  newData: tempCartType[]
): Promise<AxiosResponse<tempCartType[], any>> => {
  return axios.post("./cart.json", newData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const useMutate = () => {
  const queryClient = useQueryClient();
  return useMutation(fetching, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
};
