import axios from "axios";

const baseURL = "https://blog.develocity.app/api";
const app_api_key =
  "CwIX5kPsfTrlDHQZxK3yW6SlNPqjA8StUhZ0xeEV6dDw0kgOmwxS2pnxLN1FBPZL";

export const globalInstance = axios.create({
  baseURL: baseURL,
  headers: { app_api_key },
});