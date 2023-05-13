import { emailInstance } from "@/api/constant";

export const subscribeToNewsletter = async email => {
  const fetRequest = await emailInstance.get("/v1/static/newSubscriber", {
    method: "POST",
    data: JSON.stringify({
      email,
    }),
  });
  const { data } = fetRequest;
  return data;
};
