import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../../types/api";

axios.defaults.withCredentials = true;

export async function axiosGet<T>(url: string, config?: AxiosRequestConfig) {
  const response = await axios.get<ApiResponse<T>>(url, config);
  return response.data;
}

export async function axiosPost<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
) {
  const response = await axios.post<ApiResponse<T>>(url, data, config);
  return response.data;
}

export async function axiosPut<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
) {
  const response = await axios.put<ApiResponse<T>>(url, data, config);
  return response.data;
}

export async function axiosDelete<T>(url: string, config?: AxiosRequestConfig) {
  const response = await axios.get<ApiResponse<T>>(url, config);
  return response.data;
}
