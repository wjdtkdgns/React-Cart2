import axios from "axios";
import { useQuery } from "react-query";

const fetching = () => {
  return axios.get("./list.json");
};

export const useListData = () => {
  return useQuery("list", fetching, {
    refetchOnWindowFocus: false,
  });
};
