import axios from "axios";

const baseURL = "https://phplaravel-992545-3494971.cloudwaysapps.com/api";
const app_api_key = "CwIX5kPsfTrlDHQZxK3yW6SlNPqjA8StUhZ0xeEV6dDw0kgOmwxS2pnxLN1FBPZL";

export const globalInstance = axios.create({
  baseURL: baseURL,
  headers: { "app-api-key": app_api_key },
});
