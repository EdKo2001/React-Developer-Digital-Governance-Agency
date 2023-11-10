import axios, { AxiosInstance } from "axios";

import env from "./env";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_KEY,
});

export default axiosInstance;
