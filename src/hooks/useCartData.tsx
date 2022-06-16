import axios from "axios";
import { useQuery } from "react-query";

const fetching = () => {
  return axios.get("./cart.json");
};

export const useCartData = () => {
  return useQuery("cart", fetching, {
    refetchOnWindowFocus: false,
  });
};
