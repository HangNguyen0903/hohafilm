import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_SOME_KEY || "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ",
  },
});

export default request;
