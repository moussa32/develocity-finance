import { globalInstance , emailInstance} from "@/api/constant";

export const fetchPreSaleStatus = async () => {
  const fetRequest = await emailInstance.get("totalTokensData");
  const { data } = fetRequest;
  return data;
};
