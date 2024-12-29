import { Profile } from "../../types/auth";
import { axiosGet } from "./axios";

export async function getProfile() {
  const url = "/api/auth/profile";
  const response = await axiosGet<Profile>(url);
  return response.data;
}
