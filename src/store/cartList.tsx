import { atom } from "recoil";

export interface tempCartType {
  id: number;
  quantity: number;
  title: string;
  content: string;
}

export const tempCartList = atom<tempCartType[]>({
  key: "tempCartList",
  default: [],
});
