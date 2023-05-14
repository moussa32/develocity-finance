import { globalInstance , emailInstance} from "@/api/constant";

export const fetchPreSaleStatus = async () => {
  const fetRequest = await emailInstance.get("/v1/static/totalTokensData");
  const { data } = fetRequest;
  console.log(data);
  return data;
};
