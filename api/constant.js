import axios from "axios";

const baseURL = "https://blog.develocity.app/api";
const emailURL = "https://powerful-teeth-production.up.railway.app/";
const app_api_key = "CwIX5kPsfTrlDHQZxK3yW6SlNPqjA8StUhZ0xeEV6dDw0kgOmwxS2pnxLN1FBPZL";

export const globalInstance = axios.create({
  baseURL: baseURL,
  headers: { "app-api-key": app_api_key },
});

export const emailInstance = axios.create({
  baseURL: emailURL,
});
