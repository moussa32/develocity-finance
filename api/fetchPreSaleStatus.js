import { globalInstance } from "@/api/constant";

export const fetchPreSaleStatus = async () => {
  const fetRequest = await globalInstance.get("/preSaleStatus");
  const { data } = fetRequest;
  return data;
};
