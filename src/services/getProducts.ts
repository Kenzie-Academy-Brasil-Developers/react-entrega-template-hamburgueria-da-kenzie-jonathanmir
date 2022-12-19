import axios from "axios";
import { api } from "./api";

export interface iProduct {
  amount: number;
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export type productType = {
  filter(arg0: (e: iProduct) => boolean): iProduct[];
  length: number;
  product: iProduct[];
};
export async function getProducts(): Promise<iProduct> {
  const { data } = await api.get<iProduct>("products");
  return data;
}
