import axios, { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

interface DataType {
  id: number;
  title: string;
  content: string;
  mode: string;
}

const fetching = (newData: DataType): Promise<AxiosResponse<DataType, any>> => {
  if (newData.mode === "ADD") {
    return axios.put<DataType>("../../cart.json", newData);
  }
  return axios.delete<DataType>("../../cart.json");
};

export const useMutate = (props: any) => {
  const queryClient = useQueryClient();
  return useMutation(fetching, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
};
