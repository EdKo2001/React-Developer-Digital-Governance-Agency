import axios, { AxiosInstance } from "axios";

import env from "./env";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.API_URL,
});

export default axiosInstance;
